var socket = io.connect("http://localhost:8000/"); //Server ip
	//Handshake with server
	socket.emit("msg", "hello server");
	socket.on("msg", function(data){
		console.log(data);
	});

function setup() {


	}

function draw(){

}
