//object constructor
function Shoes(name, size, color, stock, image){
	this.name = name
	this.size = size
	this.color = color
	this.stock = stock
	this.image = image
}

//create new products from product constructor
var allgrayshoes = new Shoes("Gray Shoes", 8, "Gray", 50, "img/allgrayshoes.png")
var blackshoes = new Shoes("Black Shoes", 7, "Black", 100, "img/blackshoes.png")
var graywhiteshoes = new Shoes("Graywhite Shoes", 9, "Graywhite", 80, "img/gray&whiteshoes.png")
var greenshoes = new Shoes("Green Shoes", 10, "Green", 40, "img/greenshoes.png")
var redshoes = new Shoes("Red Shoes", 11, "Red", 35, "img/redshoes.png")
var whiteblacksquareshoes = new Shoes("Whiteblacksquare Shoes", 12, "Whiteblacksquare", 90, "img/white&blacksquareshoes.png")

//create an array to add products to
var shoesArray = new Array

//add products to array of products
shoesArray.push(allgrayshoes, blackshoes, graywhiteshoes, greenshoes, redshoes, whiteblacksquareshoes)

//loop through products array
for(var i = 0; i < shoesArray.length; i++) {
	//create new elements for each product
	var newItem = document.createElement("div")
	var newDiv = document.createElement("div")
	var nameH2 = document.createElement("h2")
	var sizeH4 = document.createElement("h4")
	var colorH4 = document.createElement("h4")
	var stockH4 = document.createElement("h4")
	var btn = document.createElement("button")
	var image = document.createElement("img")


//create text for new elements
var sName = document.createTextNode(shoesArray[i].name)
var sSize = document.createTextNode("Available size: " + shoesArray[i].size)
var sColor = document.createTextNode("Color: " + shoesArray[i].color)
var sStock = document.createTextNode("In Stock: " + shoesArray[i].stock)
var sButton = document.createTextNode("Buy Now!")

//update source attribute
image.src = shoesArray[i].image

//update class attribute
image.className = "img-responsive"
btn.className = "btn btn-primary btn-lg"
newItem.className = "col-sm-4"
newDiv.className = "Shoes shoesName" + [i] + " thumbnail"

//add text to elements
nameH2.appendChild(sName)
sizeH4.appendChild(sSize)
colorH4.appendChild(sColor)
stockH4.appendChild(sStock)
btn.appendChild(sButton)

//add elements to new div
newDiv.appendChild(nameH2)
newDiv.appendChild(image)
newDiv.appendChild(sizeH4)
newDiv.appendChild(colorH4)
newDiv.appendChild(stockH4)
newDiv.appendChild(btn)

//add new div to new item div
newItem.appendChild(newDiv)

//add new item to the element with id="shoes"

document.getElementById("products").appendChild(newItem)
}





