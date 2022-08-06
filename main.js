/* <pseudo>
//  -PART1-
		(1)		create click handler using qJuery syntax
		(2)		define name and text- set equal to the values that are inputted by user
		(3)		define variable (newPostTextSpan) to store the creation of a new span element for each post (aka text/user message)
		(4)		define variable (newPostNameSpan) to store the creation of a new span element for each name (aka user name) 
		(5)		define variable (newPostTextNode) to store the creation of new node for the text (message) that is wrapped in span element
		(6)		define variable (newPostNameNode) to store the creation of new node for the name (user name) that is wrapped in span element 
		(7)		user input needs to be placed in the nodes mentioned above...use appendChild method for this
		(8)		user input must be rendered on page upon triggering event (i.e. button), so...specify the location of such rendering by declaring variables that are associated with the appropriate elements (i.e. posts div and new posts div)
		(9)		new posts should be rendered on separate rows. Declare a variable that stores the creation of a new element (i.e. row)
		(10)	review code and assure that, when possible, jQuery syntax is used 

		-PART2-
		(11)  


		-BEAUTIFY-
		( )		clear input fields upon click event (i.e. submit button)
		( )		stylize all text
		( )		stylize background
		( )		utilize 12-column grid from css.frameworks file
*/


$('button').on('click', function () {
	
	var text = $('#message').val();
	var name = $('#name').val();

	var postsDiv = $('.posts');

	var newPostDiv = $('<div>');

	var newPostTextSpan = document.createElement('span');
	var newPostTextNode = document.createTextNode(text);
	newPostTextSpan.appendChild(newPostTextNode);

	var newPostNameSpan = document.createElement('span');
	var newPostNameNode = document.createTextNode(' -Posted By: ' + name);
	newPostNameSpan.appendChild(newPostNameNode);

	var newPostHR = document.createElement('hr');

	newPostDiv.append(newPostTextSpan);
	newPostDiv.append(newPostNameSpan);
	newPostDiv.append(newPostHR);

	postsDiv.append(newPostDiv);
});


	


