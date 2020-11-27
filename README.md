# gvc-robots

Summary:

1. Input is ready to receive data according ONLY Syntax described in brief. I'd assume in real world info would come via an API and would adjust accordingly. That said I have made a function to clean up empty lines.
2. Upon running the input data via the "run" button the room is created using the top value, beyond that every odd and even line is collected and creates a robot.
3. Robots are created and placed within an object with their coordinates, orientation and orders according to input data.
4. Orders are carried out by iterating over the requested actions located in the robots object and are only stopped if robot exits room.
5. If robot exits room they create a dangerZone at the area they departed from.
6. Robots will no longer be able to leave map from that marked Dangerzone, though may freely pass through it.

Notables:

I tried to stay within the 3 hour window so didn't want to go too fancy. 2-3 hours is not long enough to do a complex dev (at least in my opinion). Good enough to get a prototype out that can be improved upon later at least.

With this is in mind I went with vanilla JS, my strength. Though it was only at the end of the build I realized that the syncronous nature of my code so far would cause issues eventually. Had I had more time I would perhaps rewrite using more arrays ratehr than objects to easily utilize ES6 promises, async and await.

If this test is an indication that this sort of work is what the job is to entail in future I'm sure I'll be entertained. 
Thanks for the test and your time.
