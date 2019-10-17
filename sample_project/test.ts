export class main {
    public ping(){
        var birthday = new Date('August 19, 1975 23:15:30');
        var day1 = birthday.getDay();

        alert("pong " + day1);
    }
}

let x = new main()
x.ping();
