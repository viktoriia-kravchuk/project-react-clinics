# project-1-react NOTES

1. Data gets set/updated/deleted in the store via the results of handling actions in reducers. Reducers receive the current state of a slice of your app, and expect to get new state back. One of the most common reasons that your components might not be re-rendering is that you're modifying the existing state in your reducer instead of returning a new copy of state with the necessary changes (check out the Troubleshooting section). When you mutate the existing state directly, Redux doesn't detect a difference in state and won't notify your components that the store has changed.

 >: {...object} or Arrays: [...theArray]

 [![Foo](https://res.cloudinary.com/practicaldev/image/fetch/s--m5BdPzhS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/riadAin.gif)](http://google.com.au/)

2. The main difference between useState() and useRef() is :

    * useState causes re-render, useRef does not.

    * The common between them is, both useState and useRef can remember their data after re-renders. So if your variable is something that decides a view layer render, go with useState. Else use useRef.

    * Another big difference is that setting a state is asynchronous and setting a ref is synchronous.
