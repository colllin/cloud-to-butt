;(function() {

var substitutions = [
	[/\bwitnesses\b/g, "these dudes I know"],
	[/\ballegedly\b/g, "kinda probably"],
	[/\bnew study\b/g, "tumblr post"],
	[/\brebuild\b/g, "avenge"],
	[/\bspace\b/g, "spaaace"],
	[/\bgoogle glass\b/g, "virtual boy"],
	[/\bsmartphone\b/g, "pokédex"],
	[/\belectric\b/g, "atomic"],
	[/\bsenator\b/g, "elf-lord"],
	[/\bcar\b/g, "cat"],
	[/\belection\b/g, "eating contest"],
	[/\bcongressional leaders\b/g, "river spirits"],
	[/\bhomeland security\b/g, "homestar runner"],
	[/\bcould not be reached for comment\b/g, "is guilty and everyone knows it"]
];

walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	for (var i = 0; i < substitutions.length; i++) {
		v.replace(substitions[i][0], substitions[i][1]);
	}
	
	textNode.nodeValue = v;
}


})();
