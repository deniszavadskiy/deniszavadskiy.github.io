
Project template.





        Fonts:


=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


    Converter otf/ttf  to woff:

https://andrewsun.com/projects/woffjs/woffer-woff-font-converter/

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

300    Light
400    Normal or Regular
500    Medium
600    Semibold, Demibold
700    Bold
800    Black, Extra Bold or Heavy
900    Extra Black, Fat, Poster or Ultra Black

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

	/*Example*/

/*@font-face {
	font-family: "Roboto";
	src: url("..media/fonts/roboto.woff");
}


    /*Example for IE10+*/

@font-face {
    font-family: "AkzidenzGroteskPro-Cn";
    src: url("../media/fonts/AkzidenzGroteskPro-Cn.eot#");
    src: local("AkzidenzGroteskPro-Cn"),
    url("../media/fonts/AkzidenzGroteskPro-Cn.woff") format("woff"),
    url("../media/fonts/AkzidenzGroteskPro-Cn.ttf") format("truetype");
    font-weight:400;
}



=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


		Stylus:

----------------

	to install Stylus:

npm install -g stylus nib


	to compile stylus files to css run:


stylus -w -u nib stylus/ -o css/