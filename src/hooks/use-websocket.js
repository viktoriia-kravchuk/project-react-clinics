
const useWebSocket = () => {
  let stack = [];
  let onmessageDefer;

  let socket = {
    ws: new WebSocket("wss://aaspatal.live/cmsws"),
    send: function(data) {
        data = JSON.stringify(data);
        if (socket.ws.readyState === 1) {
            console.log(`message sent!!!: ${data}`);
            socket.ws.send(data);
        } else {
            stack.push(data);
        }
    },
    onmessage: function (event) {
      if (socket.ws.readyState === 1) {
        socket.ws.onmessage = event;
      } else {
        onmessageDefer = event;
      }
    },
  };

  socket.ws.onopen = (event) => {

    console.log("Connection is made");
    //console.log(socket.onmessage({"message_type":126}));
    // for (i in stack) {
    //     socket.ws.send(stack[i]);
    // }
    // stack = [];
    if (onmessageDefer) {
      socket.ws.onmessage = onmessageDefer;
      onmessageDefer = null;
    }
  };
  socket.ws.onerror = (message) => {
    console.log(`[WS Error] : ${message}`);
  };

  window.setInterval(pingWebSocket, 20000);

  function pingWebSocket() {
    const request = { message_type: 0 };
    socket.ws.send(request);
  }
  return socket;
};
export default useWebSocket;
