# Author : Calebdeji

# Touchables :

    The tochable components provide the capability to capture tapping gestures and can display feedback when the gesture is recognized.
    PS: no default style. The type of feedback determines the type of touchable component you want to use

# Touchable component :

    Touchable Highlight :
        Could be use anywhere you would use butto or link on the web. Must have only one child

    TouchableNativeFeedback ( Android only ):
        Coming back to this ....


    TouchableOpacity :
        Can be used to provide feedback by reducing the opacity of the button, allowing the backgroud to be seen 2ru while pressing down
    TouchableWithoutFeedback :
        A tap gesture without a feedback to be displayed

# Side Note :

    Corresponding property for object-fit is resizeMode and has values such as cover, contain, stretch, center

# List :

    ScrollView :
        renders all elements including those that are not currently showing on the screen
    FlatList :
        The FlatList component displays a scrolling list of changing, but similarly structured, data.Unlike the more generic ScrollView, the FlatList only renders elements that are currently showing on the screen, not all the elements at once.
        Requores two props : data and renderItem.

# Static Keyword :

    The static keyword defines a static method for a class. Static methods aren't called on instances of the class. Instead, they're called on the class itself. These are often utility functions, such as functions to create or clone objects.

# Static variable :

    There may be times when a static variable is needed in a Javascript function; static variables maintain their value between function calls and are tidier than using a global variable because they cannot be modified outside of the function.
    Example :
    function foo() {

        if( typeof foo.counter == 'undefined' ) {
            foo.counter = 0;
        }
        foo.counter++;
        document.write(foo.counter+"<br />");
    }
    foo(); //1
    foo(); //2
    foo(); //3
    foo(); //4
