//- ::::: Owl Meter ::::: -// ::::: 2022_02_02:17:04:34 ::::: -//
//~ :: HOOT Webelistics® :: ~// :: Internet Application Development :: ~//
//- :: Putting the Application in "Your Hands", wherever you "Need-It" :: -//
//~ :: Desktop-Mobile-iPad-Game_Machine :: Universal WiFi & Universal Apps :: ~//
//- :::::::::::::::    HOOT for a "Great" Application !!!!    ::::::::::::::: ~//

'use strict';

const body = document.querySelector('body');

// Ability to "Set Multiple Attributes"
const setAttributes = (tag, attributes) => {
	for (let key in attributes) {
		tag.setAttribute(key, attributes[key]);
	}
};

const owlLoad = () => {
	const style = document.createElement('style');
	setAttributes(style, {
		id: 'style',
		type: 'text/css',
		rel: 'stylesheet',
		crossorigin: 'anonymous',
	});
	const styleText = `
        .meter-container { 
            margin: -30vh auto 0vh auto;
            position: relative;
            display: flex;
            jusify-content: center;
            // justify-items: center;
            width: 40vh;
            height: auto;
            // background-color: hsl(32, 83%, 54%);
        }`;
	style.innerHTML = `${styleText}`;
	body.appendChild(style);
	const meterContainer = document.createElement('div');
	setAttributes(meterContainer, {
		id: 'meter-container',
		class: 'meter-container',
	});
	body.appendChild(meterContainer);
	const hootMeter = document.createElement('div');
	setAttributes(hootMeter, {
		id: 'hoot-meter',
		class: 'hoot-meter',
	});
	const hootMeterOwl1 = document.createElement('div');
	setAttributes(hootMeterOwl1, {
		id: 'hoot-meter-owl',
		class: 'hoot-meter-owl',
	});
	const hootMeterOwl2 = document.createElement('div');
	setAttributes(hootMeterOwl2, {
		id: 'hoot-meter-owl',
		class: 'hoot-meter-owl',
	});
	const hootMeterOwl3 = document.createElement('div');
	setAttributes(hootMeterOwl3, {
		id: 'hoot-meter-owl',
		class: 'hoot-meter-owl',
	});
	const hootMeterOwl4 = document.createElement('div');
	setAttributes(hootMeterOwl4, {
		id: 'hoot-meter-owl',
		class: 'hoot-meter-owl',
	});
	const hootMeterOwl5 = document.createElement('div');
	setAttributes(hootMeterOwl5, {
		id: 'hoot-meter-owl',
		class: 'hoot-meter-owl',
	});
	const hootMeterOwl6 = document.createElement('div');
	setAttributes(hootMeterOwl6, {
		id: 'hoot-meter-owl',
		class: 'hoot-meter-owl',
	});

	meterContainer.appendChild(hootMeter);
	const owlLings = [
		hootMeterOwl1,
		hootMeterOwl2,
		hootMeterOwl3,
		hootMeterOwl4,
		hootMeterOwl5,
		hootMeterOwl6,
	];

	owlLings.forEach(owl => hootMeter.appendChild(owl));
};
owlLoad();
//
//
//
// @hoot-meter
//Design :::: Almost called this "Universal Webelistics" :::: Design//
//Design :::: What a Winning "Combination!!" :::: Design//
//Design :::: A Combination of Universal Versatility :::: Design//
//Design :::: Where you find WiFi, yes.. Universal Webelistics will be there! :::: Design//
//npm :::: and "YES" >>>> It's "EVERYWHERE" It's "EVERYWHERE" :::: npm//
//npm :::: StarLink, StarLink, a Rocket here a Rocket there :::: npm//
//component >> It's Everywhere >> Universal Webelistics is "EVERYWHERE" It's "EVERYWHERE" :::: component//
//~ Introducing the "World-Wide" "Amalgamation->/<>/<-that's Conflating" the Dichotomy ~//
//~ Utilizing a technological-dissolution, smartly triumphing over the arcane seperation ~//
//~ triggering repudiation of the fractal-state Physiologically surrounding while surveiling
//~ the singularity existent convoluting Desktop & Internet Applicational perspectivity;   ~//
//npm : and that irrefutably universal & incontestable! With a determinate technological diviation
//~   coupled with an emotional assertion, purposefully ensconced traversing this necessary journey
//~ in search of a software developmental equality. Acqusitioning and achievment
//~ of a compositional unanimity amongst the software engineering community brought this
//~ journey anomalously close to nearly becoming a type of Observational Astronomy.
//~ Experiencing such a wonderful astronomical expanse beholding observables
//~ originating from the sun and being configured with a certain angular deviation,
//~  that suggestively, from its perihelion moved a planet.
//~ From a vantage point of luminosity, the observatory of the darker regions,
//~ comes with revelatory awakenings and certain emperical findings maneuvering an almost achieving equity from a coherced observational
//~ reality. Wow! That was years of a confined and compounded inferiority
//~ complex made manifest from an innocently acquired, but surley a mistakenly false
//~ understanding, by the software engineering community,  concerning the Desktop developmental
//~ processes and environments having a percieved superiority beholdant contrarily with regards concerning the Internet developmental
//~  environments with their processes.
// ~ I have this to say from a business perspective and its point of view:
//~ I will commence this quick dissertational perspective by saying that you are probably smarter.
//~ Notwithstanding, there are many more similarities than differences between the Desktop and the Internet
//~ developmental environments. You might have to manufacture the thread and then assemble
//~ that pair of programmatical pants; spending what i perceive reseembles
//~ an engineer's revelation of an eternity. What's magically manifest in the Front & Back End
//~ of the software development environments is a software development process that's
// ~ very progressive and intuitiveness wherewith it brandishes the engineer more time to be artful and creative.
//~ You can blame in on a dynamically typed stone-aged programming language,
//~ but if an intellectually equal engineer built from our side of the isle,
//~ he would produce a quality software product that can be just as successful
//~ in its propietary and creative ways. C and C++ are great languages, far better suited
//~ for certain design strategies than other's; the same is true of the Internet
//~  development software and environments.
//~ Furthermore, I'm sure we've heard these same arguments over and over again.
//~ So here is where I'll deviate from the norm. I'm not out to prove one way
//~ or the other. I'm just here to promote a 360 degree opportunity for
// ~ developers of every ilk. The opportunity is before us like never before.
//~ JavaScript Developers have tools such as Electron which enable us to cross the isle
//~ and apply our talents against the thresholds of our ability. You might say yeah right.
//~ Hey, the speed of the average computer is viable and ready for operation! To operate with these programs
//~ the operator won't be aware of any difference what so ever. Heck, I use
//~ VS Code everyday and it was written using Electron. The original base
//~ language is probably C, so what. I'm not going to reinvent the wheel//
//~  Everytime I want to roll. Let's build our products standing upon the SHOULDERS
//~  of programming GIANTS, and there's nothing to be ashamed of.
//~ Truth be told, and be known, I didn't build these clothes I'm wearing, neither
// ~ did I build the shoes I wear. I'm just here to promote a 360 degree opportunity
// ~ for developers to come together, sharing the same passion and skills, and
// ~ create business solutions and applications that will be a credible part of the future,
// ~ and make their mark on the world.
//~
//~ Universal-WiFi's Combinated "Super-Blend-Integration" with Universal-Webelistics is "EVERYWHERE" :::: npm//
