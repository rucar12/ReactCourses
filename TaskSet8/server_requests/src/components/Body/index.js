import "./Body.css";

const posts = "https://jsonplaceholder.typicode.com/posts";
const newPost = {
    id: Math.ceil(Math.random() * 100000),
    title: 'new post',
    body: 'blablabla',
    userId: Math.random() * 10000000000000000,
}
const remakePost = {
    id: 1,
    title: 'kyky',
    body: 'haha',
    userId: 1,
}
const updPost = {
    id: 2,
    body: "pamparam"
}
const delPost = {
    id: 1
}

const Request = (method, url, body = null) => {
    if (method === "GET") {
        fetch(url, {
            method: method
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(error => console.error('error:', error));
    } else if (method === "POST") {
        const newUrl = (url + '/' + body.id);
        fetch(url, {
            method: method,
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((json) => console.log("Added new post: " + JSON.stringify(body) + ". Url: " + newUrl))
            .catch(error => console.error('error:', error));
    } else if (method === "PUT") {
        const putUrl = (url + '/' + body.id);
        fetch(putUrl, {
            method: method,
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((json) => console.log("Post was edit to" + JSON.stringify(body)))
            .catch(error => console.error('error:', error));
    } else if (method === "PATCH") {
        const patchUrl = (url + '/' + body.id);
        fetch(patchUrl, {
            method: method,
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((json) => console.log("Body text was edit to: " + body.body))
            .catch(error => console.error('error:', error));
    } else if (method === "DELETE") {
        const delUrl = (url + "/" + body.id)
        fetch(delUrl, {
            method: method,
        })
            .then(console.log(`Page ${delUrl} was delete`));
    }
}

const Body = () => {

    return (
        <div>
            <div className={"title"}> For result - check logs in console </div>
            <div className={"container"}>
                <button className={"button"} onClick={() => Request("GET", posts, "")}>
                    Get
                </button>
                <button className={"button"} onClick={() => Request("POST", posts, newPost)}>
                    Post
                </button>
                <button className={"button"} onClick={() => Request("PUT", posts, remakePost)}>
                    Edit
                </button>
                <button className={"button"} onClick={() => Request("PATCH", posts, updPost)}>
                    Update
                </button>
                <button className={"button"} onClick={() => Request("DELETE", posts, delPost)}>
                    Delete
                </button>
            </div>
        </div>
    )

}

export default Body;