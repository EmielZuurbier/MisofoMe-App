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
                content: "De Amisos is een test ontwikkeld door het AMC om de mate van Misofonie te meten. Hieronder kunt u de test afnemen en uw mate van Misofonie meten",
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
                content: "Met de stresstest kunt u vastleggen hoe hoog uw stress is op de afgenomen momenten. Met de opgeslagen data kunt u vervolgens ",
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
                id: 5,
                category: ["groep, beweging, geluid"],
                tags: ["omgeving"],
                url: "views/cards/oefeningen/racket.html",
                img: "media/city-people-walking-blur.jpg",
                thumb: "media/thumb/thumb1.jpg",
                icon: "fa fa-puzzle-piece",
                desc: "Probeer met de racket de bal of shuttle hoog te houden. Ondertussen maakt de toeschouwer smak / kuch / snuif geluiden.",
                title: "Racket met bal of shuttle en toeschouwer",
                content: "Probeer met de racket de bal of shuttle hoog te houden. Ondertussen maakt de toeschouwer smak / kuch / snuif geluiden. Houdt de focus op het hooghouden.",
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
                id: 6,
                category: ["concentratie"],
                tags: ["keel, geritsel"],
                url: "views/cards/oefeningen/achteruit.html",
                img: "media/city-sunny-couple-love.jpg",
                thumb: "media/thumb/thumb2.jpg",
                icon: "fa fa-puzzle-piece",
                desc: "Vindt een comfortabele plek waar niemand u kan storen. Tel in je hoofd van 100 tot 1. Voel je vrij om dat aantal te verhogen naar 500 of 1000, afhankelijk van de staat.",
                title: "Achteruit tellen",
                content: "Vindt een comfortabele plek waar niemand u kan storen. Tel in je hoofd van 100 tot 1. Voel je vrij om dat aantal te verhogen naar 500 of 1000, afhankelijk van de staat.",
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
                id: 7,
                category: ["concentratie"],
                tags: ["eet"],
                url: "views/cards/oefeningen/brief.html",
                img: "media/coffee-cup-bed-bedroom.jpg",
                thumb: "media/thumb/thumb3.jpg",
                icon: "fa fa-puzzle-piece",
                desc: "Kies een moment in de toekomst (twee, vijf, tien jaar later dan nu of een ander tijdstip dat voor jou zinvol is). Schrijf de datum die je hebt gekozen boven aan je brief. Stel je voor dat de tussenliggende jaren voorbij zijn en dat je een brief aan je vroegere zelf schrijft.",
                title: "Brief uit de toekomst",
                content: "Kies een moment in de toekomst (twee, vijf, tien jaar later dan nu of een ander tijdstip dat voor jou zinvol is). Schrijf de datum die je hebt gekozen boven aan je brief. Stel je voor dat de tussenliggende jaren voorbij zijn en dat je een brief aan je vroegere zelf schrijft. Zet je naam in de aanhef van de brief: ‘Beste of lieve…’ Bij het schrijven van de brief stel je je voor dat je op die specifieke datum in de toekomst een prettig, gezond en bevredigend leven leidt. Als je op dit moment problemen hebt, neem dan aan dat die opgelost zijn of dat je een goede manier hebt gevonden om ermee om te gaan. Leg in de brief uit hoe je de problemen en moeilijkheden waarmee je worstelde, hebt opgelost. Vertel wat je achteraf bekeken het meest heeft geholpen. Beschrijf zo gedetailleerd mogelijk hoe je in deze imaginaire toekomst je tijd doorbrengt. Hoe ziet een doorsnee dag eruit? Beschrijf je contacten, overtuigingen, overpeinzingen van het verleden en je speculaties over de verdere toekomst. Geef jezelf tot slot nog een aantal wijze raadgevingen mee. De oorsprong van deze oefening vind je in ‘Stap voor stap’ van Yvonne Dolan",
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
                id: 8,
                category: ["video", "concentratie"],
                tags: ["herhaaldelijk"],
                url: "views/cards/oefeningen/video.html",
                template: true,
                img: "media/light-love-clouds-river.jpg",
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
                id: 9,
                category: ["lezen, concentratie"],
                tags: ["keel"],
                url: "views/cards/oefeningen/urgent.html",
                img: "media/man-person-people-train.jpg",
                thumb: "media/thumb/thumb5.jpg",
                icon: "fa fa-puzzle-piece",
                desc: "Urgente zaken zijn zelden belangrijk en belangrijke zaken zelden urgent",
                title: "Urgente Zaken",
                content: "Urgente zaken zijn zelden belangrijk en belangrijke zaken zelden urgent",
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
                id: 10,
                category: ["tekst, concentratie"],
                tags: ["nasaal"],
                url: "views/cards/oefeningen/loslaten.html",
                img: "media/people-feet-train-travelling.jpg",
                thumb: "media/thumb/thumb6.jpg",
                icon: "fa fa-puzzle-piece",
                desc: "Wanneer je hoofd vol zit omdat er iets vervelends is gebeurd of je je druk maakt om iets dat komen gaat kan onderstaande oefening je helpen om rustig te worden door je problemen als het ware weg te blazen.",
                title: "Loslaten van gedachten",
                content: "Wanneer je hoofd vol zit omdat er iets vervelends is gebeurd of je je druk maakt om iets dat komen gaat kan onderstaande oefening je helpen om rustig te worden door je problemen als het ware weg te blazen. Het is een oefening die behoort tot de groep mindfulness oefeningen die zich specifiek richt op het loslaten van gedachten. Stap 1: Adem langzaam diep in door je neus en houdt de adem een paar tellen vast. Stap 2: Blaas langzaam uit door je mond en richt je op het uitblazen. Stap 3: Herhaal stap 2 en 3. Stap 4: Merk op dat je hart rustiger gaat kloppen. Stap 5: Beeld je in dat je op het strand staat. Voel het zand tussen je tenen en de wind in je gezicht. Hoor het klotsen van de golven. Stap 6: Richt je blok op de horizon waar de zon net ondergaat. Mooie oranje, rode kleuren. Stap 7: Wanneer de vervelende gedachten toch in je opkomen blaas je ze langzaam uit richting de horizon om je vervolgens weer op de horizon te richten. Stap 8: Wanneer je merkt dat je rustiger wordt richt je je focus van de horizon naar je ademhaling. Stap 9: Richt je op het hier en nu door wat te bewegen (schouders, voeten, kaken).",
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
                id: 11,
                category: ["tekst, stress"],
                tags: ["eet"],
                url: "views/cards/oefeningen/lichaamsanker.html",
                img: "media/pexels-photo.jpg",
                thumb: "media/thumb/thumb7.jpg",
                icon: "fa fa-puzzle-piece",
                desc: "Dit is persoonlijk één van mijn favoriete oefeningen die ik regelmatig gebruik om te ontstressen of rustig te worden. Als ik alleen ben, maar ook voor lastige gesprekken zoals een sollicitatiegesprek waarbij de spanning flink kan oplopen.",
                title: "Het Lichaamsanker",
                content: "Dit is persoonlijk één van mijn favoriete oefeningen die ik regelmatig gebruik om te ontstressen of rustig te worden. Als ik alleen ben, maar ook voor lastige gesprekken zoals een sollicitatiegesprek waarbij de spanning flink kan oplopen. Het lichaamsanker bestaat uit vier oefeningen: Focus op de ademhaling. Merk op waar de ademhaling zich bevindt. Is deze laag in de buik of hoog op de borst? Is de ademhaling rustig of misschien bibberig? Merk het op en probeer niet te oordelen. Gedachten komen ongetwijfeld op, maar laat deze ook weer gaan en focus je op de ademhaling. Focus op het fysieke voelen. Richt je op je lichaamsdelen die contact maken met voorwerpen of omgeving, bijvoorbeeld de vloer of een stoel. Ga na waar in je voeten het contact met de grond het duidelijkst is, in de tenen of in de hiel? Voel het contact tussen je rug en de leuning van de stoel. Rusten je armen op de leuning en zo ja waar is de meeste druk? Richt je aandacht op die contactpunten. Bewegen. Onbewust zitten we vaak op een manier die past bij waar we mee bezig zijn. Zijn we op ons werk druk in de weer met de computer, dan is de kans groot dat we te weinig bewegen en in één houding zitten. Ook bij een lastig gesprek neemt het lichaam vaak een verkrampte houding aan. Het is dus belangrijk bewust te zijn van waar je mee bezig bent . Rol eens met je schouders, verplaats je voeten of leg je handen in je schoot. Merk op wat er gebeurt door het bewegen en hoe dat voelt. Spannen van de gezichtsspieren. Richt je focus op je gezichtsspieren. Breng spanning in de spieren door bijvoorbeeld de ogen wat dicht te knijpen of vorm een glimlach.",
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
                id: 12,
                category: ["geluid"],
                tags: ["eet"],
                template: true,
                url: "views/cards/oefeningen/geluid.html",
                img: "media/restaurant-man-person-coffee.jpg",
                thumb: "media/thumb/thumb8.jpg",
                icon: "fa fa-puzzle-piece",
                desc: "Geluidsfragment voor spierontspanning",
                title: "Geluidsfragment voor spierontspanning",
                content: "",
                show: false
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
            i: true
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
            amiData: [ [3, 3, 2, 4, 3, 1, 4, 0, 1, 2], [1, 4, 5, 3, 2, 3, 4, 4, 2, 3] ],
            
            // DATA VOOR LIJN DIAGRAM
            amiDates: [ "15/3", "3/3", "12/6", "29/7", "31/9" ],
            amiTotal: [ [19, 8, 25, 21, 13] ],
            amiTotalLabel: [ "Totaal per sessie" ],
            // DATA CIRKEL (STRESS) DIAGRAM
            stressRecording: 0,
            stressData: [ 10, 40, 10, 60 ],
            stressLabels: [ "Kalm", "Walging", "Stress", "Woede" ],
            colours:
                [
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