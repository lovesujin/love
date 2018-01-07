/*
   Deluxe Menu Data File
   Created by Deluxe Tuner v3.15
   http://deluxe-menu.com
*/



//--- Common
var menuIdentifier="deluxeMenu";
var isHorizontal=1;
var smColumns=1;
var smOrientation=0;
var dmRTL=0;
var pressedItem=-2;
var itemCursor="pointer";
var itemTarget="_self";
var statusString="link";
var blankImage="ajax-menu.files/blank.gif";
var pathPrefix_img="";
var pathPrefix_link="";

//--- Dimensions
var menuWidth="";
var menuHeight="";
var smWidth="";
var smHeight="";

//--- Positioning
var absolutePos=0;
var posX="0px";
var posY="0px";
var topDX=0;
var topDY=0;
var DX=0;
var DY=0;
var subMenuAlign="left";
var subMenuVAlign="top";

//--- Font
var fontStyle=["normal 13px calibri,arial,tahoma","normal 13px calibri,arial,tahoma"];
var fontColor=["#FFFFFF","#FFFFFF"];
var fontDecoration=["none","none"];
var fontColorDisabled="#AAAAAA";

//--- Appearance
var menuBackColor="#353535";
var menuBackImage="";
var menuBackRepeat="repeat";
var menuBorderColor="#C0AF62";
var menuBorderWidth="0px";
var menuBorderStyle="none";
var smFrameImage="";
var smFrameWidth=0;

//--- Item Appearance
var itemBackColor=["#353535","#353535"];
var itemBackImage=["ajax-menu.files/blank.gif","ajax-menu.files/back-over.gif"];
var itemSlideBack=0;
var beforeItemImage=["",""];
var afterItemImage=["",""];
var beforeItemImageW="";
var afterItemImageW="";
var beforeItemImageH="";
var afterItemImageH="";
var itemBorderWidth="1px 0px 1px 0px";
var itemBorderColor=["#3F3F3F #333333 #292929 #333333","#3F3F3F #333333 #292929 #333333"];
var itemBorderStyle=["solid","solid"];
var itemSpacing=0;
var itemPadding="10px 12px 10px 10px";
var itemAlignTop="center";
var itemAlign="left";

//--- Icons
var iconTopWidth="";
var iconTopHeight="";
var iconWidth="";
var iconHeight="";
var arrowWidth="";
var arrowHeight="";
var arrowImageMain=["",""];
var arrowWidthSub="";
var arrowHeightSub="";
var arrowImageSub=["",""];

//--- Separators
var separatorImage="";
var separatorColor="";
var separatorWidth="0px";
var separatorHeight="0px";
var separatorAlignment="left";
var separatorVImage="";
var separatorVColor="";
var separatorVWidth="0px";
var separatorVHeight="0px";
var separatorPadding="0px";

//--- Floatable Menu
var floatable=0;
var floatIterations=6;
var floatableX=1;
var floatableY=1;
var floatableDX=15;
var floatableDY=15;

//--- Movable Menu
var movable=0;
var moveWidth=12;
var moveHeight=20;
var moveColor="#DECA9A";
var moveImage="";
var moveCursor="move";
var smMovable=0;
var closeBtnW=15;
var closeBtnH=15;
var closeBtn="";

//--- Transitional Effects & Filters
var transparency="100";
var transition=103;
var transOptions="";
var transDuration=350;
var transDuration2=200;
var shadowLen=0;
var shadowColor="#B1B1B1";
var shadowTop=0;

//--- CSS Support (CSS-based Menu)
var cssStyle=0;
var cssSubmenu="";
var cssItem=["",""];
var cssItemText=["",""];

//--- Advanced
var dmObjectsCheck=0;
var saveNavigationPath=1;
var showByClick=0;
var noWrap=1;
var smShowPause=200;
var smHidePause=1000;
var smSmartScroll=1;
var topSmartScroll=0;
var smHideOnClick=1;
var dm_writeAll=1;
var useIFRAME=0;
var dmSearch=0;

//--- AJAX-like Technology
var dmAJAX=1;
var ajaxReload=0;

//--- Dynamic Menu
var dynamic=0;

//--- Popup Menu
var popupMode=0;

//--- Keystrokes Support
var keystrokes=0;
var dm_focus=1;
var dm_actKey=113;

//--- Sound
var onOverSnd="";
var onClickSnd="";

var itemStyles = [
];
var menuStyles = [
];
dm_init();