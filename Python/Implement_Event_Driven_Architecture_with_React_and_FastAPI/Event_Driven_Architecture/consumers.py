from fastapi import HTTPException
import json

def create_delivery(state, event):
    data = json.loads(event.data)
    return {
        "id": event.delivery_id,
        "budget": int(data["budget"]),
        "notes": data["notes"],
        "status": "ready"
    }

def start_delivery(state, event):
    if state["status"] != "ready":
        raise HTTPException(status_code=400, detail="Delivery already started")
    # state["status"] = "active"
    return state | {
        "status": "active"
    }

def pickup_products(state, event):
    # TODO add validation
    data = json.loads(event.data)
    purchase_price = int(data["purchase_price"])
    quantity = int(data["quantity"])
    new_budget = state["budget"] - purchase_price * quantity
    
    if new_budget < 0:
        raise HTTPException(status_code=400, detail="Not enough budget")
    
    return state | {
        "budget": new_budget,
        "purchase_price": purchase_price,
        "quantity": quantity,
        "status": "collected"
    }

def deliver_products(state, event):
    data = json.loads(event.data)
    sell_price = int(data["sell_price"])
    quantity = int(data["quantity"])
    new_budget = state["budget"] + sell_price * quantity
    new_quantity = state["quantity"] - quantity

    if new_quantity < 0:
        raise HTTPException(status_code=400, detail="Not enough quantity ")

    return state | {
        "budget": new_budget,
        "sell_price": sell_price,
        "quantity": new_quantity,
        "status": "completed"
    }

def increase_budget(state, event):
    data = json.loads(event.data)
    state["budget"] += int(data["budget"])
    return state

CONSUMERS = {
    "CREATE_DELIVERY": create_delivery,
    "START_DELIVERY": start_delivery,
    "PICKUP_PRODUCTS": pickup_products,
    "DELIVER_PRODUCTS": deliver_products,
    "INCREASE_BUDGET": increase_budget
}