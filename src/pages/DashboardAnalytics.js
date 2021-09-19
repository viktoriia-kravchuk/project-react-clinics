import useWebSocket from "../hooks/use-websocket";

const DashboardAnalytics = () => {
    const socket = useWebSocket();
    const event = socket.send({"message_type":81});

    socket.onmessage(function (event) {
        let data = JSON.parse(event.data);
        if (data.message_type === 81) {
            console.log(data)
        }
});

    
    return <div> Dashboard Analytics Page</div>
}
export default DashboardAnalytics;