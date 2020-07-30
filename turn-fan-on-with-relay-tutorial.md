# Control the temperature in your greenhouse using a fan

## Introduction @unplugged 
In this tutorial you'll learn how to control the temperature and humidity in your garden by turning a fan on and off. 
You will learn how to code a special type of programmable switch called a relay.
Make sure that you have your circuit put together before you start this tutorial.
Look at this page if you need help putting together your circuit: https://sites.google.com/bc.edu/leafs-project/journey/episode-four?authuser=0#h.c9yevqylwi9u 

## Step 1 @unplugged
We're going to start by writing a program that will let us test our relay and fan to make sure that they're working. 

## Step 2 
The relay switch can be turned on and off using the ``||Pins:digital write pin||`` block.
Drag two ``||Pins:digital write pin||`` blocks onto your screen. 
We will need one block to turn the switch on and one block to turn the switch off.

## Step 3
Make sure that both of the ``||Pins:digital write pin||`` blocks have "P1" selected in the dropdown menu. 

``` blocks
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
```

## Step 4
Change one of the ``||Pins:digital write pin||`` blocks so that there's a "1" in the blank spot at the end of the block.
"Writing" or sending the number 1 to the relay will turn the switch on and let electricity flow through. 
Writing the number 0 will turn the switch off and prevent electricity from flowing. 

``` blocks
pins.digitalWritePin(DigitalPin.P1, 1)
pins.digitalWritePin(DigitalPin.P1, 0)
```
## Step 5
Now let's connect our blocks to button presses so that we can use the A and B buttons to turn the relay on and off.
Drag a ``||Input:on button A pressed||`` block and a ``||Input:on button B pressed||`` block onto your screen.
Put the block that says ``||Pins:digital write pin P1 to 1||`` in the ``||Input:on button A pressed||`` block.
Put the block that says ``||Pins:digital write pin P1 to 0||`` in the ``||Input:on button B pressed||`` block.

``` blocks
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
})
```
## Step 6
Add a different icon to each ``||Input:on button pressed||`` block. 
This part isn't necessary but it will help you see if your code and your circuit is working. 
If the icons show up on your screen but your fan isn't working, the problem is with your circuit and not your code. 
``` blocks
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.showIcon(IconNames.SmallHeart)
})
```
## Step 7
You're ready to test! Download this program to your micro:bit. 
After it has downloaded, make sure to plug your power cord into the grove shield, NOT the micro:bit.
Then you can test your code. Press the A button, you should hear the relay click and the fan should turn on.
Press the B button, you should hear the relay click and the fan should turn off. 

## Step 8 
Now let's use the temperature and humidity sensor to control when the fan turns on and off. 
A lot of plants don't like hot temperatures, turning a fan on can help cool them down. 
Grab a ``||DHT11_DHT22:Query||`` block from the ``||DHT11_DHT22:DHT11/DHT22 category||`` and drag it into the ``||basic:forever||`` block.  Make sure all of the ``||Logic:true/false||`` statements say `True` and that you have selected "DHT22".



```blocks
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P0,
    true,
    true,
    true
    )
  
})
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.showIcon(IconNames.SmallHeart)
})
```
##Step 9
As you've seen in other programs, we will need to use an "if-then" statement(also known as a conditional statement) to tell the fans to turn on if the temperature is too hot and to turn off if the temperature is okay. 
Add an ``||Logic:if then||`` block to your ``||Basic:forever||`` loop underneath of the ``||DHT11_DHT22:Query||`` block.

## Step 10
Now we need to add a comparison block in the spot in the if-then statement that says "true".
Grab the comparison block that says ``||Logic:0 < 0||`` and place it in the spot that says "true" in the if-then statement. 

``` blocks
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P1,
    true,
    false,
    true
    )
    if (0 < 0) {
    	
    } else {
    	
    }
})

```

## Step 11
Replace the first 0 in the comparison block with a ``||DHT11_DHT22:read||`` block from the ``||DHT11_DHT22:DHT11/DHT22||`` category.
Make sure that temperature is selected from the drop down menu in this block. 

``` blocks
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P1,
    true,
    false,
    true
    )
    if (dht11_dht22.readData(dataType.temperature) < 0) {
    	
    } else {
    	
    }
})
``` 
## Step 12 
Change the second 0 to the temperature (in degrees celsius) that you think should trigger the fan to turn on.
For example, I think that 80 degrees Fahrenheit is too hot for my plants. So I'm going to type 27 (which is 80.6 degrees Fahrenheit)

``` blocks 
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P1,
    true,
    false,
    true
    )
    if (dht11_dht22.readData(dataType.temperature) > 27) {
    	
    } else {
    	
    }
})
```


## Step 13 
Now we need to add the code that turns the fan on or off. Remember that we want the fan to turn on if the temperature is too hot.
So let's add the block that turns our fan on underneath of the "if" part of the if-then statement. 
Grab a ``||Pins:digital write pin||`` block and place it underneath of the "if" section of the if-then statement. 
Change the pin number to pin 1 and change the number 0 at the end to 1. 

``` blocks
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P1,
    true,
    false,
    true
    )
    if (dht11_dht22.readData(dataType.temperature) > 27) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
    	
    }
})
``` 
## Step 14
Now add the code that will turn the fan off. Press the plus button at the bottom of the if-then statement.
This will turn it into an "if-then-else" statement. 
Which means that your program will turn on the fan if the temperature higher than 27 degrees Celsius, otherwise (this is the "else" part) it will turn the fan off. 
Grab a ``||Pins:digital write pin||`` block and place it underneath of the "else" section of the if-then-else statement. 
Change the pin number to pin 1.  

``` blocks
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P1,
    true,
    false,
    true
    )
    if (dht11_dht22.readData(dataType.temperature) > 27) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
``` 

## Step 15 
Now you're ready to test your code! Remember that you can add icons to your if-then statement just like we did with the button press blocks. This might help you make sure that your program is working correctly.
Try holding the temperature sensor in your hands or close to a grow light to increase the temperature.
Remember that you can always add code to show the temperature on your micro:bit screen too. See the hint for this step to see what that code would look like.
Finally, you don't need to get rid of your button press code! Keep this code and then if you think that your garden could use a breeze, you can simply turn the fan on. 

``` blocks
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P1,
    true,
    false,
    true
    )
    if (dht11_dht22.readData(dataType.temperature) > 27) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showIcon(IconNames.Yes)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showIcon(IconNames.No)
    }
})
```

``` package
pxt-DHT11_DHT22=github:alankrantas/pxt-DHT11_DHT22#v0.0.2
```



