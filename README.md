# project-1-react NOTES

1. Data gets set/updated/deleted in the store via the results of handling actions in reducers. Reducers receive the current state of a slice of your app, and expect to get new state back. One of the most common reasons that your components might not be re-rendering is that you're modifying the existing state in your reducer instead of returning a new copy of state with the necessary changes (check out the Troubleshooting section). When you mutate the existing state directly, Redux doesn't detect a difference in state and won't notify your components that the store has changed.

 >: {...object} or Arrays: [...theArray]

 [![Foo](https://res.cloudinary.com/practicaldev/image/fetch/s--m5BdPzhS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/riadAin.gif)](http://google.com.au/)

2. The main difference between useState() and useRef() is :

    * useState causes re-render, useRef does not.

    * The common between them is, both useState and useRef can remember their data after re-renders. So if your variable is something that decides a view layer render, go with useState. Else use useRef.

    * Another big difference is that setting a state is asynchronous and setting a ref is synchronous.
3. If you are referring to component state, then hooks will not help you share it between components. Component state is local to the component. If your state lives in context, then useContext hook would be helpful.
    1. **Lift State Up**
    Lift state up to a common ancestor component of the two components.  return


        function Ancestor() {  

            const [count, setCount] = useState(999);  

            return <>

            <DescendantA count={count} onCountChange={setCount} />        

            <DescendantB count={count} onCountChange={setCount} /></>;  
        }  

    This state sharing approach is not fundamentally different from the traditional way of using state, hooks just give us a different way to declare component state.
    2. **Context**
    If the descendants are too deep down in the component hierarchy and you don't want to pass the state down too many layers, you could use the Context API.
    There's a useContext hook which you can leverage on within the child components.

    3. **External State Management Solution**
    State management libraries like Redux or Mobx. Your state will then live in a store outside of React and components can connect/subscribe to the store to receive updates.
