/*global app, angular*/


app.factory('data', ['$http', function ($http) {
    "use strict";
    
    return {
        
        // ALLE KAARTEN
        cards: [
            
            // GRAFIEKEN
            {
                name: "Amisos",
                active: true,
                type: "test",
                title: "Amisos",
                icon: "fa fa-sliders",
                id: 0,
                url: "views/cards/cardTest.html",
                template: true,
                category: ["test"],
                content: "<p>De Amisos is een test ontwikkeld door het AMC om de mate van Misofonie te meten. Hieronder kunt u de test afnemen en uw mate van Misofonie meten</p>",
                show: true,
                footer: "hide"
            },
            {
                name: "Stress test",
                active: false,
                type: "test",
                title: "Stress-test",
                icon: "fa fa-sliders",
                id: 1,
                url: "views/cards/cardStress.html",
                template: true,
                category: ["test"],
                content: "<p>Met de stresstest kunt u vastleggen hoe hoog uw stress is op de afgenomen momenten. De resultaten worden op de telefoon opgeslagen</p>",
                show: true,
                footer: "hide"
            },
            {
                name: "Tekst Diagram",
                active: false,
                type: "graph",
                title: "Verslag Amisos",
                icon: "fa fa-hashtag",
                id: 2,
                url: "views/cards/cardResultText.html",
                template: true,
                category: ["graph"],
                show: true,
                footer: "hide"
            },
            {
                name: "Lijn Diagram",
                active: true,
                type: "graph",
                title: "Resultaten Amisos per afname",
                icon: "fa fa-area-chart",
                id: 3,
                url: "views/cards/cardResultLine.html",
                template: true,
                category: ["graph"],
                show: true,
                footer: "hide"
            },
            {
                name: "Staaf Diagram",
                active: false,
                type: "graph",
                title: "Resultaten Amisos vergelijking",
                icon: "fa fa-bar-chart",
                id: 4,
                url: "views/cards/cardResultBar.html",
                template: true,
                category: ["graph"],
                show: true,
                footer: "hide"
            },
            {
                name: "Circel Diagram",
                active: false,
                type: "graph",
                title: "Resultaten Stresstest",
                icon: "fa fa-pie-chart",
                id: 5,
                url: "views/cards/cardResultPie.html",
                template: true,
                category: ["graph"],
                show: true,
                footer: "hide"
            },
            
            // OEFENINGEN
            {
                name: "Racket Oefening",
                active: false,
                type: "exercise",
                author: "Vereniging Misofonie",
                likes: 122,
                dislikes: 31,
                liked: false,
                disliked: false,
                likeDisabled: false,
                id: 6,
                category: ["groep, beweging, geluid"],
                tags: ["omgeving"],
                url: "views/cards/oefeningen/racket.html",
                thumb: "media/thumb/thumb1.jpg",
                icon: "fa fa-puzzle-piece",
                desc: "Probeer met de racket de bal of shuttle hoog te houden. Ondertussen maakt de toeschouwer smak / kuch / snuif geluiden.",
                title: "Racket met bal of shuttle en toeschouwer",
                content: "<p>Probeer met de racket de bal of shuttle hoog te houden. Ondertussen maakt de toeschouwer smak / kuch / snuif geluiden. Houdt de focus op het hooghouden.</p>",
                show: false
            },
            {
                name: "Achteruit tellen",
                active: true,
                type: "exercise",
                author: "Vereniging Misofonie",
                likes: 89,
                dislikes: 9,
                liked: false,
                disliked: false,
                likeDisabled: false,
                id: 7,
                category: ["concentratie"],
                tags: ["keel, geritsel"],
                url: "views/cards/oefeningen/achteruit.html",
                thumb: "media/thumb/thumb2.jpg",
                icon: "fa fa-puzzle-piece",
                desc: "Vind een comfortabele plek waar niemand je kan storen. Tel in je hoofd van 100 tot 1. Voel je vrij om dat aantal te verhogen naar 500 of 1000, afhankelijk van de staat.",
                title: "Achteruit tellen",
                content: "<p>Vindt een comfortabele plek waar niemand u kan storen. Tel in je hoofd van 100 tot 1. Voel je vrij om dat aantal te verhogen naar 500 of 1000, afhankelijk van de staat.</p>",
                show: false
            },
            {
                name: "Brief uit de toekomst",
                active: false,
                type: "exercise",
                author: "Vereniging Misofonie",
                likes: 33,
                dislikes: 25,
                liked: false,
                disliked: false,
                likeDisabled: false,
                id: 8,
                category: ["concentratie"],
                tags: ["eet"],
                url: "views/cards/oefeningen/brief.html",
                thumb: "media/thumb/thumb3.jpg",
                icon: "fa fa-puzzle-piece",
                desc: "Kies een moment in de toekomst (twee, vijf, tien jaar later dan nu of een ander tijdstip dat voor jou zinvol is). Schrijf de datum die je hebt gekozen boven aan je brief. Stel je voor dat de tussenliggende jaren voorbij zijn en dat je een brief aan je vroegere zelf schrijft.",
                title: "Brief uit de toekomst",
                content: "<p>Kies een moment in de toekomst (twee, vijf, tien jaar later dan nu of een ander tijdstip dat voor jou zinvol is). Schrijf de datum die je hebt gekozen boven aan je brief. Stel je voor dat de tussenliggende jaren voorbij zijn en dat je een brief aan je vroegere zelf schrijft.</p><p>Zet je naam in de aanhef van de brief: <i>‘Beste of lieve…’</i> Bij het schrijven van de brief stel je je voor dat je op die specifieke datum in de toekomst een prettig, gezond en bevredigend leven leidt. Als je op dit moment problemen hebt, neem dan aan dat die opgelost zijn of dat je een goede manier hebt gevonden om ermee om te gaan. Leg in de brief uit hoe je de problemen en moeilijkheden waarmee je worstelde, hebt opgelost. Vertel wat je achteraf bekeken het meest heeft geholpen. Beschrijf zo gedetailleerd mogelijk hoe je in deze imaginaire toekomst je tijd doorbrengt. Hoe ziet een doorsnee dag eruit? Beschrijf je contacten, overtuigingen, overpeinzingen van het verleden en je speculaties over de verdere toekomst.</p><p> Geef jezelf tot slot nog een aantal wijze raadgevingen mee. De oorsprong van deze oefening vind je in ‘Stap voor stap’ van Yvonne Dolan</p>",
                show: false
            },
            {
                name: "Loslaten negatieve emotie of gedachte",
                active: false,
                type: "exercise",
                author: "Vereniging Misofonie",
                likes: 189,
                dislikes: 44,
                liked: false,
                disliked: false,
                likeDisabled: false,
                id: 9,
                category: ["video", "concentratie"],
                tags: ["herhaaldelijk"],
                url: "views/cards/oefeningen/video.html",
                template: true,
                thumb: "media/thumb/thumb4.jpg",
                icon: "fa fa-puzzle-piece",
                desc: "Met deze intuïtieve oefening laat je negatieve energie los",
                title: "Loslaten negatieve emotie of gedachte",
                content: "",
                show: false
            },
            {
                name: "Urgente Zaken",
                active: false,
                type: "exercise",
                author: "Vereniging Misofonie",
                likes: 90,
                dislikes: 2,
                liked: false,
                disliked: false,
                likeDisabled: false,
                id: 10,
                category: ["lezen, concentratie"],
                tags: ["keel"],
                url: "views/cards/oefeningen/urgent.html",
                thumb: "media/thumb/thumb5.jpg",
                icon: "fa fa-puzzle-piece",
                desc: "Urgente zaken zijn zelden belangrijk en belangrijke zaken zelden urgent",
                title: "Urgente Zaken",
                content: "<p>Urgente zaken zijn zelden belangrijk en belangrijke zaken zelden urgent</p>",
                show: false
            },
            {
                name: "Loslaten van gedachten",
                active: false,
                type: "exercise",
                author: "Vereniging Misofonie",
                likes: 56,
                dislikes: 9,
                liked: false,
                disliked: false,
                likeDisabled: false,
                id: 11,
                category: ["tekst, concentratie"],
                tags: ["nasaal"],
                url: "views/cards/oefeningen/loslaten.html",
                thumb: "media/thumb/thumb6.jpg",
                icon: "fa fa-puzzle-piece",
                desc: "Wanneer je hoofd vol zit omdat er iets vervelends is gebeurd of je je druk maakt om iets dat komen gaat kan onderstaande oefening je helpen om rustig te worden door je problemen als het ware weg te blazen.",
                title: "Loslaten van gedachten",
                content: "<p>Wanneer je hoofd vol zit omdat er iets vervelends is gebeurd of je je druk maakt om iets dat komen gaat kan onderstaande oefening je helpen om rustig te worden door je problemen als het ware weg te blazen. Het is een oefening die behoort tot de groep mindfulness oefeningen die zich specifiek richt op het loslaten van gedachten.</p><h5>Stap 1:<h5><p>Adem langzaam diep in door je neus en houdt de adem een paar tellen vast.</p><h5>Stap 2:</h5><p>Blaas langzaam uit door je mond en richt je op het uitblazen.</p><h5>Stap 3:</h5><p>Herhaal stap 2 en 3.<p><h5>Stap 4:</h5><p>Merk op dat je hart rustiger gaat kloppen.</p><h5>Stap 5:</h5><p>Beeld je in dat je op het strand staat. Voel het zand tussen je tenen en de wind in je gezicht. Hoor het klotsen van de golven.</p><h5>Stap 6:</h5><p>Richt je blok op de horizon waar de zon net ondergaat. Mooie oranje, rode kleuren.</p><h5>Stap 7:</h5><p>Wanneer de vervelende gedachten toch in je opkomen blaas je ze langzaam uit richting de horizon om je vervolgens weer op de horizon te richten.</p><h5>Stap 8:</h5><p>Wanneer je merkt dat je rustiger wordt richt je je focus van de horizon naar je ademhaling.</p><h5>Stap 9:</h5><p>Richt je op het hier en nu door wat te bewegen (schouders, voeten, kaken).</p>",
                show: false
            },
            {
                name: "Het Lichaamsanker",
                active: false,
                type: "exercise",
                author: "Vereniging Misofonie",
                likes: 42,
                dislikes: 53,
                liked: false,
                disliked: false,
                likeDisabled: false,
                id: 12,
                category: ["tekst, stress"],
                tags: ["eet"],
                url: "views/cards/oefeningen/lichaamsanker.html",
                thumb: "media/thumb/thumb7.jpg",
                icon: "fa fa-puzzle-piece",
                desc: "Dit is persoonlijk één van mijn favoriete oefeningen die ik regelmatig gebruik om te ontstressen of rustig te worden. Als ik alleen ben, maar ook voor lastige gesprekken zoals een sollicitatiegesprek waarbij de spanning flink kan oplopen.",
                title: "Het Lichaamsanker",
                content: "<p>Dit is persoonlijk één van mijn favoriete oefeningen die ik regelmatig gebruik om te ontstressen of rustig te worden. Als ik alleen ben, maar ook voor lastige gesprekken zoals een sollicitatiegesprek waarbij de spanning flink kan oplopen.</p><p>Het lichaamsanker bestaat uit vier oefeningen:</p><h5>Focus op de ademhaling.</h5><p>Merk op waar de ademhaling zich bevindt. Is deze laag in de buik of hoog op de borst? Is de ademhaling rustig of misschien bibberig? Merk het op en probeer niet te oordelen. Gedachten komen ongetwijfeld op, maar laat deze ook weer gaan en focus je op de ademhaling.</p><h5>Focus op het fysieke voelen.</h5><p>Richt je op je lichaamsdelen die contact maken met voorwerpen of omgeving, bijvoorbeeld de vloer of een stoel. Ga na waar in je voeten het contact met de grond het duidelijkst is, in de tenen of in de hiel?<p><h5>Voel het contact tussen je rug en de leuning van de stoel.</h5><p>Rusten je armen op de leuning en zo ja waar is de meeste druk? Richt je aandacht op die contactpunten. Bewegen. Onbewust zitten we vaak op een manier die past bij waar we mee bezig zijn. Zijn we op ons werk druk in de weer met de computer, dan is de kans groot dat we te weinig bewegen en in één houding zitten. Ook bij een lastig gesprek neemt het lichaam vaak een verkrampte houding aan. Het is dus belangrijk bewust te zijn van waar je mee bezig bent. Rol eens met je schouders, verplaats je voeten of leg je handen in je schoot. Merk op wat er gebeurt door het bewegen en hoe dat voelt.</p><h5>Spannen van de gezichtsspieren.</h5><p>Richt je focus op je gezichtsspieren. Breng spanning in de spieren door bijvoorbeeld de ogen wat dicht te knijpen of vorm een glimlach.</p>",
                show: false
            },
            {
                name: "Rekenspel",
                active: true,
                type: "exercise",
                author: "Vereniging Misofonie",
                likes: 240,
                dislikes: 89,
                liked: false,
                disliked: false,
                likeDisabled: false,
                id: 13,
                category: ["concentratie"],
                tags: ["reken"],
                url: "views/cards/oefeningen/rekenspel.html",
                thumb: "media/thumb/thumb9.jpg",
                icon: "fa fa-puzzle-piece",
                desc: "Een rekenspel om te focussen op hetgene wat telt",
                title: "Rekenspel",
                content: "<p>Een rekenspel om focussen op hetgene wat telt</p>",
                template: true,
                show: false
            },
            {
                name: "Geluidsoefening",
                active: true,
                type: "exercise",
                author: "Vereniging Misofonie",
                likes: 52,
                dislikes: 14,
                liked: false,
                disliked: false,
                likeDisabled: false,
                id: 14,
                category: ["geluid"],
                tags: ["eet"],
                template: true,
                url: "views/cards/oefeningen/geluid.html",
                thumb: "media/thumb/thumb8.jpg",
                icon: "fa fa-puzzle-piece",
                desc: "Geluidsfragment voor spierontspanning",
                title: "Geluidsfragment voor spierontspanning",
                content: "",
                show: false
            }
        ],
        
        info: [
            {
                title: 'Wat is misofonie?',
                content: "<p><q>Misofonie? Is dat niet wat je hebt als je je ergert aan etende mensen?</q></p><p>Misofonie gaat over meer dan ‘je ergeren aan’. Het is een neurologische aandoening die grote impact heeft op de levens van mensen die eraan lijden. Er is nog vrij weinig bekend over misofonie.</p><p>Letterlijk betekent misofonie ‘haat van geluid’. De naam misofonie is 2001 vastgelegd door de Amerikaanse wetenschappers Margaret en Pawel Jastreboff. In Nederland werd de aandoening in 2009 ontdekt door psychiater Damiaan Denys. Misofonie wordt ook wel aangeduid als een vorm van geluidsintolerantie of een stoornis in de impulscontrole. De term Selective Sound Sensitivity Syndrome (4S) wordt soms ook gebruikt. Eigenlijk is de term misofonie niet meer helemaal juist omdat de meeste mensen met misofonie ook last hebben van bewegingen. Deze ‘haat voor bewegingen’ wordt ook wel misokinesia genoemd. Over de onderlinge relatie is nog weinig bekend.'</p>"
            },
            {
                title: 'Symptomen',
                content: "<p>Kenmerkend is dat specifieke geluiden bij mensen met misofonie hevige negatieve gevoelens opwekken. Die gevoelens, de feitelijke symptomen van misofonie, zijn extreme woede, haat of afschuw. Mensen met misofonie worden overvallen door extreme boosheid of walging bij het horen of zien van hun triggers (bepaalde geluiden of bewegingen die de gevoelens opwekken).</p> <p>Bij iemand met misofonie is vrijwel altijd sprake van de volgende drie factoren:</p><h5>Reflexmatige emotionele reactie op externe triggers</h5><p>Iedereen kent ergenissen, groot of klein. Mensen die zich ‘gewoon’ ergeren, worden boos na bijvoorbeeld een halfuur het gebonk van de muziek van de buren aangehoord te moeten hebben. Veel mensen ergeren zich als iemand nogal luidruchtig een appel eet of steeds met een pen zit te klikken. Mensen die geen misofonie hebben kunnen het naast zich neerleggen. Bij mensen met misofonie wordt hun aandacht er naartoe gezogen en ontstaat er direct en zonder dat ze het willen hevige gevoelens van woede, haat of walging.  Ze kunnen zich niet meer concentreren op wat ze aan het doen waren en willen het liefst wegvluchten of juist de strijd aangaan met diegene of datgene dat het geluid maakt. De reactie op triggers is een pavlovreactie. Hier ligt geen beslissing of mening aan ten grondslag. Iemand die getriggerd wordt, kan op dat moment niet helder nadenken en zichzelf kalmeren. Lees meer bij Wat gebeurt er in het brein?</p><h5>Veel vermijdingsgedrag</h5><p>Omdat de opgewekte gevoelens zo hevig en naar zijn, doen misofoniepatiënten veel moeite om triggers te vermijden. Vermijding is dan ook de meestgebruikte copingstrategie, een manier om te kunnen omgaan met misofonie. Onder vermijding valt: uit een situatie weggaan of wegblijven en bepaalde personen ontwijken. In gradatie kan het variëren van even de kamer uitlopen tot zich helemaal terugtrekken uit het sociale leven. De meeste mensen met misofonie gaan bijvoorbeeld nooit naar de bioscoop (popcorn) of het theater (gesnif, gehoest).</p><h5>Grote impact op (sociaal) leven</h5><p>Misofonie raakt vele aspecten van het leven. Voor de meeste mensen die eraan lijden, geldt dat ze problemen ondervinden op het gebied van relaties, school of studie, werk, ouderschap en algemene gezondheid. Ook is het van invloed op het gevoel van eigenwaarde en het zelfbeeld. Lees meer bij Impact van misofonie</p><p>Naast de hevige emoties die de triggers opwekken, hebben mensen met misofonie ook last van:</p><ul><li>Verhoogd spanningsniveau door continue alertheid en stress</li><li>Concentratieproblemen</li><li>Schuldgevoelens en schaamte</li><li>Angsten: anticipatieangst en angst om zelfbeheersing te verliezen</li><li>Zich onbegrepen voelen (door zichzelf en anderen)</li>"
            },
            {
                title: 'Geluiden',
                content: "<h5>Bij misofonie gaat het vooral om alledaagse, menselijke en zachte geluiden:</h5><ul><li>Smakken, slikken, afbijten</li><li>Niezen, hoesten, neus ophalen</li><li>Kuchen, keelschrapen, geeuwen</li><li>Ademen</li><li>Fluiten, neuriën, zingen</li><li>Iemand’s stem, lach, uitspraak van een bepaalde letter</li></ul><h5>Ook andere geluiden die door mensen, dieren of apparaten geproduceerd worden, kunnen triggers zijn:</h5><ul><li>Klikken met een pen</li><li>Typen op een toetsenbord</li><li>Lopen op een harde vloer met hakken</li><li>Roeren met een lepeltje in een beker</li><li>Het tikken van een klok</li><li>Het kraken van chipszakken</li><li>Het zingen van vogels en het blaffen van honden</li></ul><p>Vrijwel alle mensen met misofonie hebben het meest last van de mond- en keelgeluiden. Bij de meesten begint het hier ook mee. Maar iedere persoon met misofonie is uniek en heeft een eigen lijst van geluiden. In de loop van de tijd kan er verschuiving optreden; nieuwe triggers ontstaan en bestaande triggers zwakken af of verdwijnen.</p>"
            },
            {
                title: 'Bewegingen',
                content: '<p>De meeste mensen met misofonie hebben ook visuele triggers. De triggers zijn vaak repeterende bewegingen, zoals</p><ul><li>Wiebelen met een voet of been</li><li>Frunniken aan haar</li><li>Malende kaken</li></ul>'
            },
            {
                title: 'Ontstaan',
                content: '<p>Over het ontstaan van misofonie is nog weinig bekend. Meestal ontstaat het tussen het 8e en het 12e levensjaar. De oorzaak (hoe) of reden (waarom) dat iemand misofonie krijgt, is nog niet duidelijk. Wanneer mensen met misofonie wordt gevraagd wat zij zich herinneren van het ontstaan van de misofonie, noemen zij vaak een herinnering aan bepaalde geluiden aan de eettafel. Maar lang niet iedereen die van dit soort geluiden walgt of boos wordt, ontwikkelt misofonie. Het komt voor dat meerdere personen in een familie misofonie hebben. Onderzoekers in het Amsterdam Medisch Centrum (AMC) doen DNA-onderzoek om de genetische achtergrond in kaart te brengen. Voorlopige onderzoeksresultaten wijzen uit dat erfelijkheid een rol speelt bij misofonie. Hoeveel mensen aan misofonie lijden, is nog niet duidelijk.</p>'
            },
            {
                title: 'Behandeling',
                content: '<p>Het AMC in Amsterdam is wereldwijd het enige instituut dat én een diagnose kan stellen én onderzoeken uitvoert naar misofonie én een effectieve therapie biedt. Deze behandeling bestaat uit technieken en oefeningen uit de cognitieve gedragstherapie (CGT), aandachtstraining, countercounditionering en ontspanningsoefeningen. Lees meer bij Therapie.</p><p>Er bestaat geen medicijn voor misofonie.</p><p>Mensen met misofonie kunnen ook zelf een aantal dingen doen om minder last ervaren van hun aandoening.</p>'
            },
            {
                title: 'DSM',
                content: '<p>In de DSM, het handboek voor classificatie van psychische stoornissen, heeft misofonie nog geen eigen vermelding. De misofonie-onderzoekers van het AMC pleiten ervoor om misofonie als apart ziektebeeld op te laten nemen. In de huidige versie, DSM-5, is dat helaas nog niet gelukt. Met een eigen vermelding krijgt de aandoening erkenning en dit zal veel bijdragen aan herkenning, behandeling en onderzoek. Er zijn enkele onderzoeken en studies naar misofonie gepubliceerd.</p>'
            },
            {
                title: 'Hyperacusis, tinnitus en fonofobie',
                content: '<p>Misofonie kan voorkomen in combinatie met tinnitus (chronisch oorsuizen), hyperacusis (overgevoeligheid voor geluiden boven een bepaalde intensiteit) en fonofobie (overgevoeligheid voor harde geluiden of stemmen), maar ook alleen. Misofonie is anders dan hyperacusis in die zin dat ervaren woede of walging alleen volgt in reactie op specifieke geluiden. Bij fonofobie wordt de prikkeling van de hersenen als fysieke pijn ervaren, bij tinnitus en misofonie is er sprake van psychisch lijden. Misofonie kan voorkomen bij mensen met een normaal gehoor en bij mensen met een vorm van gehoorverlies.</p>'
            }
        ],
        
        user: {
            name: "Jan Hertogh",
            email: "jan@janhertogh.nl"
        },
         
        // PROFIEL ACTIEF
        profile: [

        ],
        
        // VOORKEUREN INSTELLINGEN
        settings: {
            a: false,
            b: false,
            c: false,
            d: false,
            e: false,
            f: "",
            g: "Wekelijks",
            h: "Maandelijks",
            i: true,
            x: true
        },
        
//        settingsPref: {
//            eet: {
//                filter: 'eet'
//            },
//            nasaal: {
//                filter: 'nasaal'
//            },
//            keel: {
//                
//            },
//            bepaald: {
//                
//            },
//            herhaaldelijk: {
//                
//            },
//            geritsel {}
//        },
        
        settingsPref: ['eet', '', '', '', '', '', ''],
        
//        settingsPref: {
//            a: 'eet',
//            b: 'nasaal',
//            c: '',
//            d: '',
//            e: '',
//            f: '',
//            g: ''
//        },
        
        // DATA VOOR GRAFIEKEN
        results: {
            // DATA STAAF DIAGRAM
            amiLabels: [ "Vraag 1", "Vraag 2",  "Vraag 3",  "Vraag 4",  "Vraag 5", "Vraag 6", "Vraag 7", "Vraag 8", "Vraag 9", "Vraag 10" ],
            amiSeries: [ "Amisos Recent", "Amisos Vorig" ],
            amiData: [ [3, 3, 2, 4, 3, 1, 4, 0, 1, 2], [1, 4, 2, 3, 2, 3, 4, 4, 2, 3] ],
            
            // DATA VOOR LIJN DIAGRAM
            amiDates: [ "15/3", "3/3", "12/6", "29/7", "31/9" ],
            amiTotal: [ [19, 8, 25, 21, 13] ],
            amiTotalLabel: [ "Totaal per sessie" ],
            // DATA CIRKEL (STRESS) DIAGRAM
            stressRecording: 0,
            stressData: [],
            stressLabels: [],
            colours:
                [
                    {
                        fillColor: "rgba(245, 70, 77, 0.5)",
                        strokeColor: "rgba(245, 70, 77, 0.8)",
                        pointColor: "rgba(220,220,220,0.5)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,0.8)"
                    },
                    {
                        fillColor: "rgba(249, 164, 58, 0.5)",
                        strokeColor: "rgba(249, 164, 58, 0.8)",
                        pointColor: "rgba(220,220,220,0.5)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,0.8)"
                    },
                    {
                        fillColor: "rgba(97, 205, 167, 0.5)",
                        strokeColor: "rgba(97, 205, 167, 0.8)",
                        pointColor: "rgba(220,220,220,0.5)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,0.8)"
                    },
                    {
                        fillColor: "rgba(3, 152, 208, 0.5)",
                        strokeColor: "#0398d0",
                        pointColor: "rgba(220,220,220,0.5)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,0.8)"
                    },
                    {
                        fillColor: "rgba(3, 114, 155, 0.5)",
                        strokeColor: "rgba(3, 114, 155, 0.8)",
                        pointColor: "rgba(220,220,220,0.5)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,0.8)"
                    },
                    {
                        fillColor: "rgba(2, 80, 109, 0.5)",
                        strokeColor: "rgba(2, 80, 109, 0.8)",
                        pointColor: "rgba(220,220,220,0.5)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,0.8)"
                    }
                ]
        }
    };
    
}]);