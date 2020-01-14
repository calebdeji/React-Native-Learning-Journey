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
