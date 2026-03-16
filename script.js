// База из 25 вопросов
const quizData = [
    {
        question: "Auf welchem Niveau befinden sich laut Ärzten Julians Mathekenntnisse?",
        options: ["Gymnasium", "Drittklässler", "Vorschule", "Er erkennt gar keine Zahlen"],
        correct: 1,
        quote: "»In Mathematik befand ich mich nämlich auf dem Niveau eines Drittklässlers.«"
    },
    {
        question: "Was bastelt sich Julian nach dem allerersten Tag in der Maßnahme?",
        options: ["Ein Zelt aus Decken", "Eine Schultüte voller Süßigkeiten", "Einen riesigen Joint aus Papier und Gras", "Ein Regal für Bücher"],
        correct: 2,
        quote: "»Keine zwei Minuten später brannte sie: meine ganz persönliche, selbst gebastelte Schultüte. Aus Papier, etwas Pappe, einem Daumen breit Tabak und einer ordentlichen Portion Gras.«"
    },
    {
        question: "Wie nennt Liza ihr Tourette-Syndrom in Gedanken?",
        options: ["Dämon", "Joker", "Luzifer", "Schatten"],
        correct: 2,
        quote: "»Luzifer so habe ich dieses unnütze Etwas genannt, das mich kurz vor dem zehnten Geburtstag entdeckt und sich an mir festgekrallt hat.«"
    },
    {
        question: "Was möchte der 'Gangster' Tariq in Wahrheit beruflich machen?",
        options: ["Rapper werden", "Automechaniker werden", "Konditor werden", "Tätowierer werden"],
        correct: 2,
        quote: "»Ich will ich will eine Ausbildung zum Konditor machen. [...] Dass ich einen Lachkrampf bekam, als Tariq von seinem Tortenbäckerwunsch erzählte, machte es nicht besser.«"
    },
    {
        question: "Welches Konzept schlägt Julian für ihr Videoprojekt vor?",
        options: ["Komödie über Lehrer", "Dokumentarfilm über zerstörte Träume (Dreamkiller)", "Musikvideo", "Reportage über reiche Kids"],
        correct: 1,
        quote: "»Wie wäre es, wenn wir mit dem Projekt zeigen, wie unsere Träume und die von anderen Kids zerstört werden? [...] Träume und wie sie sterben. Unsere schlimmsten Erlebnisse eben.«"
    },
    {
        question: "Welchen Effekt haben die Hasch-Cookies von Julian auf Liza?",
        options: ["Sie wird aggressiv", "Ihre Tics verschwinden komplett", "Sie schläft 24 Stunden", "Sie bekommt Halluzinationen"],
        correct: 1,
        quote: "»Meine Tics. Sie waren verschwunden. Einfach so! [...] Ich hatte einen Ausschalter für Luzifer gefunden: Kiffen verscheuchte Luzifer!«"
    },
    {
        question: "Warum fehlt Tariq so oft im Unterricht?",
        options: ["Er ist in einer Kochschule", "Er kifft zu viel", "Sein Vater zwingt ihn, unbezahlt in seiner Reifenwerkstatt zu arbeiten", "Er ist in einer Gang"],
        correct: 2,
        quote: "»Er baut den Erfolg der Firma darauf auf, dass er dich, seinen eigenen Sohn, zwingt, für sich zu arbeiten, und noch nicht mal dafür bezahlt!«"
    },
    {
        question: "Welchen beleidigenden Spitznamen gibt Julian seinem Mathelehrer Mittlinger?",
        options: ["Mikrohirn", "Mittelschmerz", "Mittelfinger", "Hitler"],
        correct: 2,
        quote: "»Ich musste nur zwei kleine Buchstaben hinzufügen, um den Namen meines Mathelehrers in Mittelfinger umzuändern.«"
    },
    {
        question: "Was übergibt Max an Julian auf einem USB-Stick?",
        options: ["Ein Rap-Album", "Einen Computervirus", "Ein Video vom Rektor", "Geklaute zukünftige Mathetests"],
        correct: 3,
        quote: "»In ihm lungerten zehn Dateien herum, die Test oder Arbeit hießen [...] Max hatte es geschafft, die Tests von Mittlinger zu kapern!«"
    },
    {
        question: "Was macht Julians Vater, als er von den Tests erfährt und Drogen findet?",
        options: ["Schickt ihn aufs Internat", "Schlägt ihn", "Tauscht die Türschlösser aus und schmeißt ihn raus", "Bringt ihn in eine Klinik"],
        correct: 2,
        quote: "»...denn die Schlösser sind ja ausgetauscht worden, damit du nicht mehr in die Wohnung gelangst.«"
    },
    {
        question: "Was sägt Julian, als er eigentlich einen perfekten Holzwürfel machen soll?",
        options: ["Eine Kugel", "Ein Dreieck", "Einen streichholzgroßen Holzpimmel", "Einen Holzlöffel"],
        correct: 2,
        quote: "»Übrig geblieben war ein vom Sägen noch warmer, streichholzgroßer Holzpimmel.«"
    },
    {
        question: "Wer ist zusammen mit Liza in der Projektgruppe 3?",
        options: ["Elvira, Ayse, Gustav", "Julian, Max, Tariq", "Julian, Elvira, Gustav", "Justin, Kadir, Max"],
        correct: 1,
        quote: "»Meinen Namen fand ich in Gruppe drei und außer mir standen dort... Julian, Max und tatsächlich auch Tariq.«"
    },
    {
        question: "Warum bricht Max das Spiel auf der Wiese ('Mach einen Schritt nach vorn...') wütend ab?",
        options: ["Er wurde beleidigt", "Er war müde", "Er findet, das Spiel betont zynisch die soziale Ungerechtigkeit", "Sein Fuß tat weh"],
        correct: 2,
        quote: "»Sind wir jetzt ernsthaft hierhingefahren, um den Witz des Systems noch einmal nachzuspielen?«"
    },
    {
        question: "Was will die modebewusste Elvira eigentlich werden?",
        options: ["Schauspielerin", "Topmodel", "Millionärsgattin", "Visagistin"],
        correct: 3,
        quote: "»Ich will doch einfach nur den Hauptschulabschluss machen. Ich will endlich Visagistin werden!«"
    },
    {
        question: "Was ist der Beruf von Lizas exzentrischer Mutter?",
        options: ["Musiklehrerin", "Performancekünstlerin (Lautgedichte)", "Psychiaterin", "Ladenbesitzerin"],
        correct: 1,
        quote: "»Meine Ma war Performancekünstlerin mit Schwerpunkt auf tänzerisch interpretierten Lautgedichten!«"
    },
    {
        question: "Welche geniale Idee hat Julian für das Jubiläum von Tariqs Vater?",
        options: ["Ein Streik", "Ein Beschwerdebrief", "Eine gigantische Torte in Form eines Autos", "Von zu Hause abhauen"],
        correct: 2,
        quote: "»Die Torte!«, rief ich [...] »Du machst dem eine Torte.«"
    },
    {
        question: "Welches körperliche Merkmal hat der Ausbilder Hugo?",
        options: ["Rollstuhlfahrer", "Holzbein", "Es fehlen ihm Fingerglieder an den Händen", "Augenklappe"],
        correct: 2,
        quote: "»...hob grüßend seine nicht mehr ganz vollständigen Hände in die Höhe. »Wie ihr seht, gebe ich alles fürs Holz«, kicherte er und wackelte mit den ihm noch verbliebenen Fingergliedern.«"
    },
    {
        question: "Warum hat Max in der Grundschule oft randaliert?",
        options: ["Er sprach kein Deutsch", "Ihm war furchtbar langweilig, weil er schon alles konnte", "Er hatte ADHS", "Er wollte kämpfen"],
        correct: 1,
        quote: "»Mir war einfach nur langweilig, weil ich schon alles konnte. [...] Also begann ich aus lauter Langeweile, Randale zu machen, und schwups hieß es: bestimmt ADHS.«"
    },
    {
        question: "Wie beruhigt sich Julian, wenn er panisch auf Mathezahlen starrt?",
        options: ["Er zerreißt das Papier", "Er verwandelt die Zahlen zeichnerisch in hässliche Gnome und Monster", "Er schläft ein", "Er wirft mit Stiften"],
        correct: 1,
        quote: "»Ich war Meister darin, mit ein paar Strichen Zahlen in hässliche Gnome, Monster oder sonstige Freaks zu verwandeln.«"
    },
    {
        question: "Womit vergleicht Liza ihre Tourette-Tics vor der Klasse?",
        options: ["Mit einem Stromschlag", "Mit großem Hunger", "Mit einem Niesreiz", "Mit Schluckauf"],
        correct: 2,
        quote: "»Es ist w-w-wie ein Niesreiz. Wenn es passiert, tut es irgendwie gut, ist aber leider auch meistens ziemlich peinlich.«"
    },
    {
        question: "Aus welchem einzigen Grund macht Max die Qualifikationsmaßnahme mit?",
        options: ["Gerichtsbeschluss", "Er will Jura studieren", "Nur seiner Mutter zuliebe, der er den Wunsch nicht abschlagen konnte", "Wegen des Geldes"],
        correct: 2,
        quote: "»Meine Mutter ist übrigens der einzige Grund, warum ich die Quali überhaupt besuche. Ich habe es einfach nicht übers Herz gebracht, ihr diesen Wunsch abzuschlagen.«"
    },
    {
        question: "Wie heißt das düstere Haus in der Eifel, in das die Jugendlichen fahren?",
        options: ["Burg Eifel", "Waldhütte", "Villa Foresta", "Eifel-Residenz"],
        correct: 2,
        quote: "»Voilà die Villa Foresta!«, rief Hugo [...] Nicht wie dieses düstere, mit Efeu überwucherte, dreigeschossige Haus...«"
    },
    {
        question: "Wie entscheidet sich Max am Ende bezüglich der Maßnahme?",
        options: ["Er wird bester Schüler", "Er schmeißt hin, verspricht seiner Mutter aber, die externe Prüfung zu machen", "Er wird wegen der Tests rausgeworfen", "Er zieht weg"],
        correct: 1,
        quote: "»Auf jeden Fall habe ich jetzt endlich die Reißleine gezogen, aber meiner Mutter hoch und heilig versprochen, den Hauptschulabschluss trotzdem zu machen.«"
    },
    {
        question: "Wer ruft den Schlüsseldienst, damit Julian an seinen Laptop mit dem Film kommt?",
        options: ["Lehrer Pfeiffer", "Hugo", "Julians Mutter (Christa)", "Max"],
        correct: 2,
        quote: "»Ich rufe jetzt den Schlüsseldienst und dann kannst du wieder in deine Wohnung. [...] Schon eine Stunde später hatte ich endlich meinen Laptop wieder.«"
    },
    {
        question: "Was möchte Liza nach ihrem Schulabschluss machen?",
        options: ["Schauspielerin", "Filmproduzentin (Dokus/Musikvideos)", "Schriftstellerin", "Ärztin"],
        correct: 1,
        quote: "»Filmproduzentin. Ich w-w-will gern Filme produzieren. Dokus und so oder Musikvideos oder auch andere Videoinstallationen.«"
    }
];

// Переменные состояния
let currentQuestionIndex = 0;
let userAnswers = new Array(quizData.length).fill(null); // null = пропущено
let currentBg = 1;
const maxBgs = 15;

// Элементы DOM
const screens = {
    start: document.getElementById('start-screen'),
    game: document.getElementById('game-screen'),
    confirm: document.getElementById('confirm-screen'),
    score: document.getElementById('score-screen'),
    results: document.getElementById('results-screen')
};

const bgSlider = document.getElementById('bg-slider');
const bgMusic = document.getElementById('bg-music');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressText = document.getElementById('progress-text');

// Смена экранов
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// Слайдер фона
setInterval(() => {
    currentBg++;
    if(currentBg > maxBgs) currentBg = 1;
    bgSlider.style.backgroundImage = `url('assets/bg/bg${currentBg}.jpg')`;
}, 8000); // Смена каждые 8 секунд

// Старт игры
document.getElementById('btn-start').addEventListener('click', () => {
    bgMusic.play().catch(e => console.log("Автозапуск аудио заблокирован браузером"));
    bgSlider.style.backgroundImage = `url('assets/bg/bg1.jpg')`;
    
    currentQuestionIndex = 0;
    userAnswers.fill(null);
    loadQuestion();
    showScreen('game');
});

// Загрузка вопроса
function loadQuestion() {
    const data = quizData[currentQuestionIndex];
    progressText.innerText = `Frage ${currentQuestionIndex + 1} von ${quizData.length}`;
    questionText.innerText = data.question;
    
    optionsContainer.innerHTML = ''; // Очистка старых кнопок
    
    data.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = opt;
        
        // Подсветка, если игрок уже отвечал на этот вопрос (при возврате назад)
        if (userAnswers[currentQuestionIndex] === index) {
            btn.classList.add('selected');
        }

        btn.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(btn);
    });
}

// Выбор ответа (сразу переход к следующему)
function selectAnswer(index) {
    userAnswers[currentQuestionIndex] = index;
    goToNext();
}

// Навигация
document.getElementById('btn-skip').addEventListener('click', () => {
    userAnswers[currentQuestionIndex] = null; // Пропуск
    goToNext();
});

document.getElementById('btn-back').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

document.getElementById('btn-restart').addEventListener('click', () => {
    if(confirm('Möchten Sie wirklich von vorne beginnen?')) {
        showScreen('start');
        bgMusic.pause();
        bgMusic.currentTime = 0;
    }
});

// Переход дальше или конец игры
function goToNext() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showScreen('confirm');
    }
}

// Экраны завершения
document.getElementById('btn-confirm-yes').addEventListener('click', generateDetailedResults);
document.getElementById('btn-confirm-no').addEventListener('click', generateScoreOnly);
document.getElementById('btn-show-answers').addEventListener('click', generateDetailedResults);

document.getElementById('btn-play-again').addEventListener('click', () => {
    showScreen('start');
});

// Подсчет очков
function getScore() {
    let score = 0;
    userAnswers.forEach((ans, idx) => {
        if (ans === quizData[idx].correct) score++;
    });
    return score;
}

// Показать только счет
function generateScoreOnly() {
    document.getElementById('final-score-numbers').innerText = `${getScore()} / ${quizData.length}`;
    showScreen('score');
}

// Показать разбор с цитатами
function generateDetailedResults() {
    const score = getScore();
    document.getElementById('results-score-header').innerText = `Dein Ergebnis: ${score} / ${quizData.length}`;
    
    const container = document.getElementById('results-container');
    container.innerHTML = '';
    
    quizData.forEach((q, idx) => {
        const item = document.createElement('div');
        item.classList.add('result-item');
        
        const userAnswerIndex = userAnswers[idx];
        const isCorrect = userAnswerIndex === q.correct;
        const isSkipped = userAnswerIndex === null;
        
        let answerText = "";
        if (isSkipped) {
            answerText = `<p class="answer-wrong">Deine Antwort: Übersprungen</p>`;
        } else if (isCorrect) {
            answerText = `<p class="answer-correct">Deine Antwort: ${q.options[userAnswerIndex]} (Richtig!)</p>`;
        } else {
            answerText = `<p class="answer-wrong">Deine Antwort: ${q.options[userAnswerIndex]}</p>
                          <p class="answer-correct">Richtige Antwort: ${q.options[q.correct]}</p>`;
        }
        
        item.innerHTML = `
            <h3>${idx + 1}. ${q.question}</h3>
            ${answerText}
            <div class="quote-box">Erklärung aus dem Buch:<br>${q.quote}</div>
        `;
        container.appendChild(item);
    });
    
    showScreen('results');
}