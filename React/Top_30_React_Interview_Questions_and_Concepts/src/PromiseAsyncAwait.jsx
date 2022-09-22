import "./App.css";
import  {useEffect} from "react";

const PromiseAsyncAwait = () => {
    const promiseExample = () => {
        let friend = new Promise((resolve, reject) => {
            let isChocolateEveryDay = false;

            if (isChocolateEveryDay) {
                resolve("Promise resolved");
            } else {
                reject("Promise broken");
            }
        });

        friend.then(resolve => {
            console.log(resolve);
        })
        .catch(reject => {
            console.log(reject);
        })
        ;
    };

    const promiseOne = paramOne => {
        return new Promise((resolve, reject) => {
            if (paramOne === "Csaba") resolve("Promise resolved");
            else reject("Promise broken");
        });
    };

    const promiseTwo = paramTwo => {
        return new Promise((resolve, reject) => {
            if (paramTwo === "Promise resolved") resolve("Csaba is a good boy");
            else reject("Csaba is a bad boy");
        });
    };

    const promiseMain = () => {
        promiseOne("Csaba")
            .then(firstResponse => {
                console.log(firstResponse);
                return promiseTwo(firstResponse);
            })
            .then(secondResponse => console.log(secondResponse))
            .catch(err => console.log(err))
        ;
    };

    const promiseMainAsync = async () => {
        try {

            let res = await promiseOne("Csaba");
            console.log(res);
            let resTwo = await promiseTwo("fos");
            console.log(resTwo);
        } catch(err) {
            console.log(err);
            console.log("Promise Rejected");
        }
    };

    useEffect(() => {
        // promiseMain();
        promiseMainAsync();
    }, []);

    return (
        <div></div>
    );
};

export default PromiseAsyncAwait;