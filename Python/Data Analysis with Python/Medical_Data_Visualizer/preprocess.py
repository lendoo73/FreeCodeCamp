calculate_BMI = lambda row: 1 if row.weight / (row.height / 100) ** 2 > 25 else 0

normalize_data = lambda col: 0 if col == 1 else 1