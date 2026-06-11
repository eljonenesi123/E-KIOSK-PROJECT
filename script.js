let currentLanguage = "en";

let previousPage = "";
let userLoggedIn = false;
let selectedSimType = "";
const translations = {
    en: {
        mainTitle: "ONE E-KIOSK",
        subtitle: "Fast. Simple. Efficient.",
        startBtn: "Start",

        phoneTitle: "Enter your mobile number",
        phoneSubtitle: "We will send you an OTP for verification",
        sendOtpBtn: "Send OTP",
        backHomeBtn: "Back to Home",

        guestTitle: "New to One Albania?",
        guestSubtitle: "Explore Services & Offers",

        otpTitle: "Enter OTP",
        otpSubtitle: "We have sent a 6-digit code to your phone",
        otpHint: "Demo OTP: 123456",
        verifyBtn: "Verify",
        backBtn: "Back",

        dashboardTitle: "Welcome to One Albania",
        dashboardSubtitle: "Your digital self-service hub",
        dashboardBackBtn: "Back",

        payBillCard: "Pay Bill",
        buyPackageCard: "Buy Package",
        submitComplaintCard: "Submit Complaint",
        checkCoverageCard: "Check Coverage",
        bookAppointmentCard: "Book Appointment",
        trackRequestCard: "Track Request",

        guestDashboardTitle: "Explore One Albania",
        
mobileTitle: "Mobile Services",
prepaidTitle: "Prepaid Packages",

iptvTitle: "Choose Your Internet Speed",
consentText: "I have read and agree to the",
termsText: "Terms & Conditions",
andText: "and",
privacyText: "Privacy Policy",

        mobileCard: "Mobile",
        internetTvCard: "Internet & TV",
        prepaidCard: "Prepaid",
        postpaidCard: "Postpaid",
        touristCard: "Tourist",
        esimCard: "eSIM",
        touristTitle: "Tourist Packages",

touristBalkanTitle: "Tourist 1M Albania and Balkan",
touristAlbaniaTitle: "Tourist 1M Albania",

days30: "30 Days",
days15: "15 Days",

nationalMinutes: "1 Million National Minutes",
nationalSms: "1 Million National SMS",

westernBalkanInternet: "22000 MB Internet in Western Balkans",
millionInternet: "1 Million MB Internet",
    },

    sq: {
        mainTitle: "ONE E-KIOSK",
        subtitle: "Shpejt. Thjesht. Efikase.",
        startBtn: "Fillo",

        phoneTitle: "Shkruani numrin tuaj",
        phoneSubtitle: "Do t'ju dërgojmë një kod OTP për verifikim",
        sendOtpBtn: "Dërgo OTP",
        backHomeBtn: "Kthehu në fillim",

        guestTitle: "I ri në One Albania?",
        guestSubtitle: "Shiko Shërbimet dhe Ofertat",

        otpTitle: "Shkruani OTP",
        otpSubtitle: "Kodi 6-shifror është dërguar në telefonin tuaj",
        otpHint: "OTP demo: 123456",
        verifyBtn: "Verifiko",
        backBtn: "Kthehu",

        dashboardTitle: "Mirësevini në One Albania",
        dashboardSubtitle: "Qendra juaj dixhitale e shërbimeve",
        dashboardBackBtn: "Kthehu",

        payBillCard: "Paguaj Faturën",
        buyPackageCard: "Bli Paketë",
        submitComplaintCard: "Paraqit Ankesë",
        checkCoverageCard: "Kontrollo Mbulimin",
        bookAppointmentCard: "Rezervo Takim",
        trackRequestCard: "Gjurmo Kërkesën",

        guestDashboardTitle: "Eksploro One Albania",
mobileTitle: "Shërbime Mobile",
prepaidTitle: "Paketat me Parapagesë",

iptvTitle: "Zgjidh shpejtësinë që të përshtatet",
consentText: "Pranoj",
termsText: "Kushtet dhe Termat",
andText: "dhe",
privacyText: "Politikën e Privatësisë",

        mobileCard: "Mobile",
        internetTvCard: "Internet & TV",
        prepaidCard: "Me Parapagim",
        postpaidCard: "Me Kontratë",
        touristCard: "Turistike",
        esimCard: "eSIM",
        touristTitle: "Paketat Turistike",

touristBalkanTitle: "Turist 1M Shqipëri dhe Ballkan",
touristAlbaniaTitle: "Turist 1M Shqipëri",

days30: "30 Ditë",
days15: "15 Ditë",

nationalMinutes: "1 Milion Minuta Kombëtare",
nationalSms: "1 Milion SMS Kombëtare",

westernBalkanInternet: "22000 MB Internet në Ballkanin Perëndimor",
millionInternet: "1 Milion MB Internet",
    }
};

function setText(id, value) {
    const element = document.getElementById(id);

    if (element) {
        element.innerText = value;
    }
}

function updateTexts() {
    const text = translations[currentLanguage];

    setText("mainTitle", text.mainTitle);
    setText("subtitle", text.subtitle);
    setText("startBtn", text.startBtn);

    setText("phoneTitle", text.phoneTitle);
    setText("phoneSubtitle", text.phoneSubtitle);
    setText("sendOtpBtn", text.sendOtpBtn);
    setText("backHomeBtn", text.backHomeBtn);

    setText("guestTitle", text.guestTitle);
    setText("guestSubtitle", text.guestSubtitle);

    setText("otpTitle", text.otpTitle);
    setText("otpSubtitle", text.otpSubtitle);
    setText("otpHint", text.otpHint);
    setText("verifyBtn", text.verifyBtn);
    setText("backBtn", text.backBtn);

    setText("dashboardTitle", text.dashboardTitle);
    setText("dashboardSubtitle", text.dashboardSubtitle);
    setText("dashboardBackBtn", text.dashboardBackBtn);

    setText("payBillCard", text.payBillCard);
    setText("buyPackageCard", text.buyPackageCard);
    setText("submitComplaintCard", text.submitComplaintCard);
    setText("checkCoverageCard", text.checkCoverageCard);
    setText("bookAppointmentCard", text.bookAppointmentCard);
    setText("trackRequestCard", text.trackRequestCard);

    setText("guestDashboardTitle", text.guestDashboardTitle);
setText("mobileTitle", text.mobileTitle);
setText("prepaidTitle", text.prepaidTitle);
setText("iptvTitle", text.iptvTitle);
setText("touristTitle", text.touristTitle);

setText("touristBalkanTitle", text.touristBalkanTitle);
setText("touristAlbaniaTitle", text.touristAlbaniaTitle);

setText("days30", text.days30);
setText("days15", text.days15);

setText("nationalMinutes", text.nationalMinutes);
setText("nationalSms", text.nationalSms);

setText("westernBalkanInternet", text.westernBalkanInternet);
setText("millionInternet", text.millionInternet);
setText("consentText", text.consentText);
setText("termsText", text.termsText);
setText("andText", text.andText);
setText("privacyText", text.privacyText);

    setText("mobileCard", text.mobileCard);
    setText("internetTvCard", text.internetTvCard);
    setText("prepaidCard", text.prepaidCard);
    setText("postpaidCard", text.postpaidCard);
    setText("touristCard", text.touristCard);
    setText("esimCard", text.esimCard);
}

function setLanguage(language) {
    currentLanguage = language;
    localStorage.setItem("selectedLanguage", language);
    updateTexts();
}

function hideAllPages() {
const pages = [
    "homePage",
    "phonePage",
    "otpPage",
    "dashboardPage",
    "guestDashboardPage",
    "mobilePage",
    "prepaidPage",
    "internetTvPage",
    "ultraFiberPage",
    "homeNetPage",
    "tvAppPage",
    "oneSafePage",
    "homeNetTvPage",
    "iptvPage",
    "touristPage",
    "fiberCoveragePage",
"packageActivationPage",
"paymentMethodPage",
"paymentInstructionPage",
"paymentLoadingPage",
"paymentSuccessPage",
"topUpPage",
"topUpSomeoneElsePage",
"billPaymentPage",
"billPaymentMethodPage",
"fullBillPage",
"roamingPage",
"roamingResultsPage",
"customerInfoPage",
"faceVerificationPage",
"simTypePage",
"idScanPage",
    "prepaidUserDashboard",
    "postpaidUserDashboard"
];

pages.forEach(function(pageId) {

    const page = document.getElementById(pageId);

    if (page) {
        page.style.display = "none";
    }

});

document.getElementById("cornerLogo").style.display = "none";

const logoutBtn =
    document.getElementById("logoutBtn");

if(logoutBtn){

  logoutBtn.style.display = "none";
}

} 

function showPhonePage() {
    hideAllPages();

    document.getElementById("phonePage").style.display = "flex";
    document.getElementById("cornerLogo").style.display = "block";

    document.getElementById("logoutBtn").style.display = "none";

    updateTexts();
}

function showOtpPage() {

    const phoneNumber =
        document.getElementById("phoneNumber")
        .value
        .trim();
        

    if(phoneNumber === ""){

        document.getElementById(
            "privacyModalTitle"
        ).innerHTML =
            currentLanguage === "sq"
            ? "Numri Mungon"
            : "Phone Number Required";

        document.getElementById(
            "privacyModalContent"
        ).innerHTML =
            currentLanguage === "sq"
            ? "Ju lutem vendosni numrin tuaj të telefonit."
            : "Please enter your mobile phone number.";

        document.getElementById(
            "privacyModalInfo"
        ).style.display = "flex";
        

        return;
    }

    

    const consent =
        document.getElementById("consentCheckbox");

    if (!consent.checked) {

        openPrivacyModal();

        return;
    }

    hideAllPages();

    document.getElementById(
        "otpPage"
    ).style.display = "flex";

    document.getElementById(
        "cornerLogo"
    ).style.display = "block";
        document.getElementById("logoutBtn").style.display = "none";

    updateTexts();
}

function openPrivacyModal() {

    const title =
        currentLanguage === "sq"
        ? "Kërkohet Pranimi"
        : "Acceptance Required";

    const content =
        currentLanguage === "sq"
        ? `
        Duhet të pranoni Kushtet & Termat dhe Politikën e Privatësisë për të vazhduar.
        `
        : `
        You must accept the Terms & Conditions and Privacy Policy to continue.
        `;

    document.getElementById("privacyModalTitle").innerHTML = title;

    document.getElementById("privacyModalContent").innerHTML = content;

    document.getElementById("privacyModalInfo").style.display = "flex";
}

function showDashboard() {

    const otp =
        document.getElementById("otpInput")
        .value
        .trim();

   if (otp !== "123456") {

    document.getElementById(
        "privacyModalTitle"
    ).innerHTML = "Invalid OTP";

    document.getElementById(
        "privacyModalContent"
    ).innerHTML =
        "The OTP code you entered is incorrect. Please try again.";

    document.getElementById(
        "privacyModalInfo"
    ).style.display = "flex";

    return;
}

    userLoggedIn = true;

    const phoneNumber =
        document.getElementById("phoneNumber")
        .value
        .replace(/\s/g, "");

    hideAllPages();

    if (phoneNumber === "681234567") {

        document.getElementById(
            "prepaidUserDashboard"
        ).style.display = "flex";

    }

    else if (phoneNumber === "687654321") {

        document.getElementById(
            "postpaidUserDashboard"
        ).style.display = "flex";

    }

    else {

        document.getElementById(
            "dashboardPage"
        ).style.display = "flex";

    }

    document.getElementById(
        "cornerLogo"
    ).style.display = "block";

    updateTexts();
}

function goPhonePage() {
    hideAllPages();
    document.getElementById("phonePage").style.display = "flex";
    updateTexts();
}

function goOtpPage() {
    hideAllPages();
    document.getElementById("otpPage").style.display = "flex";
    updateTexts();
}

function showGuestDashboard() {
    hideAllPages();

    document.getElementById("guestDashboardPage").style.display = "flex";
    document.getElementById("cornerLogo").style.display = "block";

    updateTexts();
}

function showMobilePage() {
    hideAllPages();

    document.getElementById("mobilePage").style.display = "flex";
    document.getElementById("cornerLogo").style.display = "block";

    updateTexts();
}

function showPrepaidPage() {
    hideAllPages();

    document.getElementById("prepaidPage").style.display = "flex";
    document.getElementById("cornerLogo").style.display = "block";

    updateTexts();
}

function showGuestServices() {
    showGuestDashboard();
}

window.onload = function () {

    const savedLanguage = localStorage.getItem("selectedLanguage");

    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }

    document.getElementById("cornerLogo").style.display = "none";

    updateTexts();

    updateFiberView();
}
function openPrivacyPolicyModal() {

    const title =
        currentLanguage === "sq"
        ? "Politika e Privatësisë"
        : "Privacy Policy";

    const content =
        currentLanguage === "sq"
        ?
        `
        <ul>
            <li>Numri juaj përdoret për identifikim dhe ofrimin e shërbimeve.</li>
            <li>Të dhënat personale ruhen në mënyrë të sigurt.</li>
            <li>Informacioni mund të përdoret për personalizimin e ofertave.</li>
            <li>Të dhënat nuk ndahen pa bazë ligjore ose autorizim.</li>
            <li>Ju mund të kërkoni fshirjen e të dhënave sipas legjislacionit në fuqi.</li>
        </ul>
        `
        :
        `
        <ul>
            <li>Your mobile number is used for identification and service delivery.</li>
            <li>Personal information is stored securely.</li>
            <li>Data may be used to personalize services and offers.</li>
            <li>Information is not shared without legal basis or authorization.</li>
            <li>You may request deletion of your personal data according to applicable laws.</li>
        </ul>
        `;

    document.getElementById("privacyModalTitle").innerHTML = title;
    document.getElementById("privacyModalContent").innerHTML = content;

    document.getElementById("privacyModalInfo").style.display = "flex";
}

function closePrivacyModalInfo(){

    document.getElementById(
        "privacyModalInfo"
    ).style.display = "none";

}

function closePrivacyModal() {

    document.getElementById("privacyModal").style.display = "none";
}
function openTermsModal() {

    const title =
        currentLanguage === "sq"
        ? "Kushtet dhe Termat"
        : "Terms & Conditions";

    const content =
        currentLanguage === "sq"
        ?
        `
        <ul>
            <li>Shërbimet ofrohen sipas politikave të One Albania.</li>
            <li>Çmimet dhe ofertat mund të ndryshojnë pa njoftim paraprak.</li>
            <li>Përdoruesi duhet të japë informacion të saktë.</li>
            <li>Të dhënat personale përpunohen sipas ligjeve shqiptare.</li>
            <li>Shërbimi është vetëm për përdorim personal.</li>
            <li>Përdoruesi është përgjegjës për sigurinë e llogarisë.</li>
            <li>Duke vazhduar, ju pranoni këto Kushte dhe Terma.</li>
        </ul>
        `
        :
        `
        <ul>
            <li>Services are provided according to One Albania policies.</li>
            <li>Prices and offers may change without prior notice.</li>
            <li>Users must provide accurate information.</li>
            <li>Personal data is processed according to applicable laws.</li>
            <li>The service is intended for personal use only.</li>
            <li>Users are responsible for keeping their account secure.</li>
            <li>By continuing, you agree to these Terms & Conditions.</li>
        </ul>
        `;

    document.getElementById("termsModalTitle").innerHTML = title;
    document.getElementById("termsModalContent").innerHTML = content;

    document.getElementById("termsModal").style.display = "flex";
}

function closeTermsModal(){

    document.getElementById("termsModal").style.display = "none";

}


function showInternetTvPage() {

    hideAllPages();

    document.getElementById(
        "internetTvPage"
    ).style.display = "flex";

    document.getElementById(
        "cornerLogo"
    ).style.display = "block";

    updateTexts();
}
function showUltraFiberPage() {

    hideAllPages();

    document.getElementById(
        "ultraFiberPage"
    ).style.display = "flex";

    document.getElementById(
        "cornerLogo"
    ).style.display = "block";

    fiberPosition = 0;

    updateFiberView();
}

function setFiberPrice(plan, contract) {

    const prices = {

        fiber100: {
            12: "1300 Lek/month",
            24: "1600 Lek/month"
        },

        fiber300: {
            12: "1600 Lek/month",
            24: "1900 Lek/month"
        },

        fiber1: {
            12: "1900 Lek/month",
            24: "2200 Lek/month"
        },

        fiber25: {
            12: "3500 Lek/month",
            24: "4000 Lek/month"
        },

        fiber10: {
            12: "7000 Lek/month",
            24: "8000 Lek/month"
        }

    };

    document.getElementById(
        plan + "Price"
    ).innerText =
        prices[plan][contract];
}
// ULTRA FIBER SLIDER

let fiberPosition = 0;

const fiberCards = [
    "fiberCard1",
    "fiberCard2",
    "fiberCard3",
    "fiberCard4",
    "fiberCard5"
];

function updateFiberView() {

    fiberCards.forEach(id => {

        const card = document.getElementById(id);

        if(card){
            card.style.display = "none";
        }

    });

    for(let i = fiberPosition; i < fiberPosition + 3; i++){

        if(fiberCards[i]){

            document.getElementById(
                fiberCards[i]
            ).style.display = "flex";
        }
    }
}

function nextFiber(){

    if(fiberPosition < 2){

        fiberPosition++;

        updateFiberView();
    }
}

function previousFiber(){

    if(fiberPosition > 0){

        fiberPosition--;

        updateFiberView();
    }
}

function showHomeNetPage(){

    hideAllPages();

    document.getElementById(
        "homeNetPage"
    ).style.display = "flex";

    document.getElementById(
        "cornerLogo"
    ).style.display = "block";
}

let currentTvPlatform = "digitalb";
let currentTvType = "contract";

const tvPlans = {
    digitalb: {
        contract: [
            { name: "Digitalb Fillestare", price: "600 Lek/month" },
            { name: "Digitalb Familjare", price: "1000 Lek/month" },
            { name: "Digitalb Premium", price: "2000 Lek/month" }
        ],
        prepaid: [
            { name: "Digitalb Fillestare", price: "1620 Lek" },
            { name: "Digitalb Familjare", price: "2700 Lek" },
            { name: "Digitalb Premium", price: "5400 Lek" }
        ]
    },

    tring: {
        contract: [
            { name: "Tring Bazë", price: "600 Lek/month" },
            { name: "Tring e plotë", price: "1000 Lek/month" }
        ],
        prepaid: [
            { name: "Tring Bazë", price: "1620 Lek" },
            { name: "Tring e plotë", price: "2700 Lek" }
        ]
    }
};

function showTvAppPage() {
    hideAllPages();

    document.getElementById("tvAppPage").style.display = "flex";
    document.getElementById("cornerLogo").style.display = "block";

    renderTvPlans();
}

function setTvPlatform(platform) {
    currentTvPlatform = platform;

    document.getElementById("digitalbBtn").classList.remove("active");
    document.getElementById("tringBtn").classList.remove("active");

    if (platform === "digitalb") {
        document.getElementById("digitalbBtn").classList.add("active");
    } else {
        document.getElementById("tringBtn").classList.add("active");
    }

    renderTvPlans();
}

function setTvType(type) {
    currentTvType = type;

    document.getElementById("contractBtn").classList.remove("active");
    document.getElementById("prepaidTvBtn").classList.remove("active");

    if (type === "contract") {
        document.getElementById("contractBtn").classList.add("active");
    } else {
        document.getElementById("prepaidTvBtn").classList.add("active");
    }

    renderTvPlans();
}

function renderTvPlans() {
    const container = document.getElementById("tvAppPlans");

    container.innerHTML = "";

    tvPlans[currentTvPlatform][currentTvType].forEach(plan => {
        container.innerHTML += `
    <div class="package-card">
        <h3>${plan.name}</h3>
        <p class="fiber-price">${plan.price}</p>
    </div>
`;
    });
}

function showOneSafePage(){

    hideAllPages();

    document.getElementById(
        "oneSafePage"
    ).style.display = "flex";

    document.getElementById(
        "cornerLogo"
    ).style.display = "block";
}

function showHomeNetTvPage(){

    hideAllPages();

    document.getElementById(
        "homeNetTvPage"
    ).style.display = "flex";

    document.getElementById(
        "cornerLogo"
    ).style.display = "block";
}
function showIptvPage(){

    hideAllPages();

    document.getElementById(
        "iptvPage"
    ).style.display = "flex";

    document.getElementById(
        "cornerLogo"
    ).style.display = "block";
}
function showTouristPage(){

    hideAllPages();

    document.getElementById("touristPage").style.display = "flex";
    document.getElementById("cornerLogo").style.display = "block";

    updateTexts();
}

function checkFiberCoverage(event){

    const map = document.getElementById("fiberMap");
    const pin = document.getElementById("mapPin");

    const rect = map.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    pin.style.left = x + "px";
    pin.style.top = y + "px";
    pin.style.display = "block";

    const result = document.getElementById("coverageResult");

    result.innerHTML = `
        <h3>✅ Fiber Coverage Available</h3>
        <p>Location selected successfully</p>
        <p>Available Speeds:</p>
        <ul>
            <li>100 Mbps</li>
            <li>300 Mbps</li>
            <li>1 Gbps</li>
            <li>2.5 Gbps</li>
        </ul>
        <p>Installation Time: 1-3 working days</p>
    `;
}

let fiberMap;

function showFiberCoveragePage(){

    hideAllPages();

    document.getElementById(
        "fiberCoveragePage"
    ).style.display = "flex";

    document.getElementById(
        "cornerLogo"
    ).style.display = "block";

    document.getElementById(
        "coverageResult"
    ).innerHTML = `
        <h3>Select a location</h3>
        <p>Click anywhere on the map.</p>
    `;

    if(!fiberMap){

        fiberMap = L.map(
            "fiberMap"
        ).setView(
            [42.0683,19.5126],
            13
        );

        L.tileLayer(
            "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ).addTo(fiberMap);

        omnivore.kml(
            "Shkoder.kml"
        ).addTo(fiberMap);

        fiberMap.on(
            "click",
            function(e){

                L.marker(
                    e.latlng
                ).addTo(fiberMap);

                document.getElementById(
                    "coverageResult"
                ).innerHTML = `
                    <h3>
                        ✅ Fiber Coverage Available
                    </h3>

                    <p>
                        Coordinates:
                        ${e.latlng.lat.toFixed(5)},
                        ${e.latlng.lng.toFixed(5)}
                    </p>

                    <p>
                        Available Speeds:
                    </p>

                    <p>
                        100 Mbps<br>
                        300 Mbps<br>
                        1 Gbps<br>
                        2.5 Gbps
                    </p>

                    <p>
                        Installation:
                        1-3 Working Days
                    </p>
                `;
            }
        );
    }

    setTimeout(function(){

        fiberMap.invalidateSize();

    },200);
}
let selectedPackageName = "";
let selectedPackagePrice = "";

function showPackageActivationPage(){

    hideAllPages();

    document.getElementById("packageActivationPage").style.display = "flex";
    document.getElementById("cornerLogo").style.display = "block";
}

function selectPackageCard(card, packageName, packagePrice){

    const cards =
        document.querySelectorAll(".activation-package-card");

    cards.forEach(function(item){
        item.classList.remove("selected");
    });

    card.classList.add("selected");

    selectedPackageName = packageName;
    selectedPackagePrice = packagePrice;
}

function activateSelectedPackage(){

    if(selectedPackageName === ""){

        alert("Please select a package first.");
        return;
    }

previousPage = "packageActivation";

    hideAllPages();

    document.getElementById("paymentMethodPage").style.display = "flex";
    document.getElementById("cornerLogo").style.display = "block";

    document.getElementById("selectedPackageText").innerText =
        selectedPackageName + " - " + selectedPackagePrice;

   
}

function showPaymentMethodPage(){

    hideAllPages();

    document.getElementById("paymentMethodPage").style.display = "flex";
    document.getElementById("cornerLogo").style.display = "block";
}

function selectPaymentMethod(method){

    hideAllPages();

    document.getElementById("paymentInstructionPage").style.display = "flex";
    document.getElementById("cornerLogo").style.display = "block";

    if(method === "card"){

        document.getElementById("paymentInstructionTitle").innerText =
            "Card Payment";

        document.getElementById("paymentInstructionText").innerText =
            "Please insert your card or place it near the contactless reader.";

    } else {

        document.getElementById("paymentInstructionTitle").innerText =
            "Cash Payment";

        document.getElementById("paymentInstructionText").innerText =
            "Please insert the required cash amount into the cash acceptor.";
    }
}

function startPaymentLoading(){

    hideAllPages();

    document.getElementById("paymentLoadingPage").style.display = "flex";
    document.getElementById("cornerLogo").style.display = "block";

    setTimeout(function(){

        hideAllPages();

        document.getElementById("paymentSuccessPage").style.display = "flex";
        document.getElementById("cornerLogo").style.display = "block";

        document.getElementById("paymentSuccessText").innerText =
            selectedPackageName + " has been activated successfully.";

    }, 2000);
}
let selectedTopUpAmount = 1000;
let selectedTopUpPayment = "card";

function showTopUpPage(){

    hideAllPages();

    document.getElementById("topUpPage").style.display = "flex";
    document.getElementById("cornerLogo").style.display = "block";
}

function selectTopUpAmount(amount){

    selectedTopUpAmount = amount;

    const buttons = document.querySelectorAll(".amount-btn");

    buttons.forEach(function(button){
        button.classList.remove("active");
    });

    event.target.classList.add("active");
}

function selectTopUpPayment(method){

    selectedTopUpPayment = method;

    const cards = document.querySelectorAll(".payment-method-card");

    cards.forEach(function(card){
        card.classList.remove("active");
    });

    event.currentTarget.classList.add("active");
}

function continueTopUpPayment(){
const customAmount =
    document.getElementById("customTopUpAmount").value;

if(customAmount && customAmount > 0){

    selectedTopUpAmount = customAmount;
}
    hideAllPages();

    document.getElementById("paymentInstructionPage").style.display = "flex";
    document.getElementById("cornerLogo").style.display = "block";

    if(selectedTopUpPayment === "card"){

        document.getElementById("paymentInstructionTitle").innerText =
            "Card Payment";

        document.getElementById("paymentInstructionText").innerText =
            "Please insert your card or place it near the contactless reader.";

    } else {

        document.getElementById("paymentInstructionTitle").innerText =
            "Cash Payment";

        document.getElementById("paymentInstructionText").innerText =
            "Please insert " + selectedTopUpAmount + " ALL into the cash acceptor.";
    }
}
let selectedOtherTopUpAmount = 500;
let selectedOtherTopUpPayment = "card";

function showTopUpSomeoneElsePage(){

    hideAllPages();

    document.getElementById(
        "topUpSomeoneElsePage"
    ).style.display = "flex";

    document.getElementById(
        "cornerLogo"
    ).style.display = "block";
}

function selectOtherTopUpAmount(amount){

    selectedOtherTopUpAmount = amount;

    const buttons =
        document.querySelectorAll(
            "#topUpSomeoneElsePage .amount-btn"
        );

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    event.target.classList.add("active");
}

function selectOtherTopUpPayment(method){

    selectedOtherTopUpPayment = method;

    const cards =
        document.querySelectorAll(
            "#topUpSomeoneElsePage .payment-method-card"
        );

    cards.forEach(card => {
        card.classList.remove("active");
    });

    event.currentTarget.classList.add("active");
}

function continueOtherTopUpPayment(){

    const recipient =
        document.getElementById(
            "otherPhoneNumber"
        ).value.trim();

    if(recipient === ""){

        alert(
            "Please enter the recipient phone number."
        );

        return;
    }

    const customAmount =
        document.getElementById(
            "otherCustomAmount"
        ).value;

    if(customAmount && customAmount > 0){

        selectedOtherTopUpAmount =
            customAmount;
    }

    hideAllPages();

    document.getElementById(
        "paymentInstructionPage"
    ).style.display = "flex";

    document.getElementById(
        "cornerLogo"
    ).style.display = "block";

    if(selectedOtherTopUpPayment === "card"){

        document.getElementById(
            "paymentInstructionTitle"
        ).innerText =
            "Card Payment";

        document.getElementById(
            "paymentInstructionText"
        ).innerText =
            "Please tap or insert your card to top-up " +
            recipient +
            " with " +
            selectedOtherTopUpAmount +
            " ALL.";

    } else {

        document.getElementById(
            "paymentInstructionTitle"
        ).innerText =
            "Cash Payment";

        document.getElementById(
            "paymentInstructionText"
        ).innerText =
            "Please insert " +
            selectedOtherTopUpAmount +
            " ALL cash to top-up " +
            recipient + ".";
    }
}
function showBillPaymentPage(){

    hideAllPages();

    document.getElementById(
        "billPaymentPage"
    ).style.display = "flex";

    document.getElementById(
        "cornerLogo"
    ).style.display = "block";
}

function showBillPaymentMethodPage(){

    hideAllPages();

    document.getElementById(
        "billPaymentMethodPage"
    ).style.display = "flex";

    document.getElementById(
        "cornerLogo"
    ).style.display = "block";
}

function startBillPayment(method){

    hideAllPages();

    document.getElementById(
        "paymentLoadingPage"
    ).style.display = "flex";

    document.getElementById(
        "cornerLogo"
    ).style.display = "block";

    setTimeout(function(){

        hideAllPages();

        document.getElementById(
            "paymentSuccessPage"
        ).style.display = "flex";

        document.getElementById(
            "cornerLogo"
        ).style.display = "block";

        document.getElementById(
            "paymentSuccessText"
        ).innerHTML = `
            Bill paid successfully.<br><br>

            <button
                class="primary-btn"
                onclick="showFullBillPage()"
            >
                View Full Bill
            </button>
        `;

    },2000);
}

function showFullBillPage(){

    hideAllPages();

    document.getElementById(
        "fullBillPage"
    ).style.display = "flex";

    document.getElementById(
        "cornerLogo"
    ).style.display = "block";
}
const ads = [
    {
        image: "https://apigw-prd.one.al/oneal/v1/uploads/828292320_my_one_app_27e122577b.png",
        title: "My One App",
        description: "Top up, manage your balance, activate roaming packages and control your One services anytime."
    },
    {
        image: "https://apigw-prd.one.al/oneal/v1/uploads/869623418_web_roaming_ang_e987598522.png",
        title: "One EU Plans",
        description: "For the first time, roaming in Europe is included in your monthly plan. Enjoy stress-free travels, no bill surprises and up to 50GB of roaming data."
    },
    {
        image: "https://apigw-prd.one.al/oneal/v1/uploads/Mix_and_Max_Smartphone_i_ri_11e5fdd87a.png",
        title: "Mix & Max",
        description: "Combine fiber internet and 5G mobile speed in one plan and benefit up to 1,800 ALL discount per month, plus exclusive advantages when everything is together."
    }
];

let currentAdIndex = 0;

function rotateAds(){

    currentAdIndex++;

    if(currentAdIndex >= ads.length){
        currentAdIndex = 0;
    }

    document.getElementById("adImage").src =
        ads[currentAdIndex].image;

    document.getElementById("adTitle").innerText =
        ads[currentAdIndex].title;

    document.getElementById("adDescription").innerText =
        ads[currentAdIndex].description;
}

setInterval(rotateAds, 5000);

function showHomeFromAds(){

    document.getElementById("adsPage").style.display = "none";

    document.getElementById("homePage").style.display = "block";

    document.getElementById("cornerLogo").style.display = "none";
}
function showRoamingPage(){

    hideAllPages();

    document.getElementById("roamingPage").style.display = "flex";
    document.getElementById(
    "cornerLogo"
).style.display = "block";
}
function showPrepaidDashboard(){

    hideAllPages();

    document.getElementById(
        "prepaidUserDashboard"
    ).style.display = "flex";

    document.getElementById(
        "cornerLogo"
    ).style.display = "block";

    document.getElementById(
        "logoutBtn"
    ).style.display = "block";
}

function continueRoaming(){

    const country =
        document.getElementById("countrySelect").value;

    if(country === ""){

        alert("Please select a country");

        return;
    }

    if(country === "Germany"){

        hideAllPages();

        document.getElementById(
            "roamingResultsPage"
        ).style.display = "flex";

        document.getElementById(
            "cornerLogo"
        ).style.display = "block";
    }
}
function logoutUser(){
    userLoggedIn = false;

    hideAllPages();

    document.getElementById(
        "homePage"
    ).style.display = "block";

    document.getElementById(
        "cornerLogo"
    ).style.display = "none";

    document.getElementById(
        "logoutBtn"
    ).style.display = "none";

    document.getElementById(
        "phoneNumber"
    ).value = "";

    document.getElementById(
        "otpInput"
    ).value = "";
    
}


let selectedRoamingPackage = "";
let selectedRoamingPrice = "";

function selectRoamingPackage(card, packageName, packagePrice){

    const cards =
        document.querySelectorAll(".mix-card");

    cards.forEach(function(item){
        item.classList.remove("selected");
    });

    card.classList.add("selected");

    selectedRoamingPackage = packageName;
    selectedRoamingPrice = packagePrice;
}

function activateSelectedRoamingPackage(){

    if(selectedRoamingPackage === ""){

        alert("Please select a roaming package first.");
        return;
    }

    selectedPackageName = selectedRoamingPackage;
    selectedPackagePrice = selectedRoamingPrice;

    previousPage = "roaming";

    hideAllPages();

    document.getElementById("paymentMethodPage").style.display = "flex";
    document.getElementById("cornerLogo").style.display = "block";

    document.getElementById("selectedPackageText").innerText =
        selectedRoamingPackage + " - " + selectedRoamingPrice;

    
}

function paymentMethodBack(){

    if(previousPage === "roaming"){
        showRoamingPage();
    }

    else if(previousPage === "packageActivation"){
        showPackageActivationPage();
    }
}
function goHome(){

    userLoggedIn = false;

    hideAllPages();

    document.getElementById(
        "homePage"
    ).style.display = "block";

    document.getElementById(
        "cornerLogo"
    ).style.display = "none";

    document.getElementById(
        "phoneNumber"
    ).value = "";

    document.getElementById(
        "otpInput"
    ).value = "";
}
function openRegisterConsentModal(){

    document.getElementById(
        "registerConsentModal"
    ).style.display = "flex";
}

function acceptRegisterConsent(){

    const accepted =
        document.getElementById(
            "registerConsentCheckbox"
        ).checked;

    if(!accepted){

        alert(
            "Please accept the consent to continue."
        );

        return;
    }

    document.getElementById(
        "registerConsentModal"
    ).style.display = "none";

   showIdScanPage();
}
function showIdScanPage(){

    hideAllPages();

    document.getElementById(
        "idScanPage"
    ).style.display = "flex";

    document.getElementById(
        "cornerLogo"
    ).style.display = "block";
}

function closeIdScanPage(){

    document.getElementById(
        "registerConsentModal"
    ).style.display = "none";

    showGuestDashboard();
}

function startIdScan(){

    document.getElementById(
        "privacyModalTitle"
    ).innerHTML =
        "Scanning ID";

    document.getElementById(
        "privacyModalContent"
    ).innerHTML =
        `
        <div class="loader"></div>
        <br>
        Reading identity document...
        `;

    document.getElementById(
        "privacyModalInfo"
    ).style.display =
        "flex";

    setTimeout(function(){

       setTimeout(function(){

    document.getElementById(
        "privacyModalInfo"
    ).style.display = "none";

    hideAllPages();

    document.getElementById(
        "customerInfoPage"
    ).style.display = "flex";

    document.getElementById(
        "cornerLogo"
    ).style.display = "block";

},3000);

        document.getElementById(
            "privacyModalContent"
        ).innerHTML = 
            `
            ✅ Identity document successfully scanned.
            <br><br>
            Proceeding to face verification...
            `;

    },3000);
}
setInterval(() => {

    const screen =
        document.querySelector(".scanner-screen");

    if(!screen) return;

    screen.innerText =
        screen.innerText === "Insert ID"
        ? "Scan Below"
        : "Insert ID";

}, 2500);


function showFaceVerificationPage(){

    hideAllPages();

    document.getElementById(
        "faceVerificationPage"
    ).style.display = "flex";

    document.getElementById(
        "cornerLogo"
    ).style.display = "block";
}

function showCustomerInfoPage(){

    hideAllPages();

    document.getElementById(
        "customerInfoPage"
    ).style.display = "flex";

    document.getElementById(
        "cornerLogo"
    ).style.display = "block";
}

function startFaceVerification(){

    const status =
        document.getElementById(
            "verificationStatus"
        );

    status.innerHTML =
        "🔍 Comparing facial features...";

    setTimeout(function(){

        status.innerHTML =
            "👁 Blink detected";

    },2000);

    setTimeout(function(){

        status.innerHTML =
            "😊 Smile detected";

    },4000);

    setTimeout(function(){

        status.innerHTML =
            `
            ✅ Face Match Successful
            <br><br>
            Similarity Score: 98.7%
            <br><br>

            <button
                class="primary-btn"
               onclick="showSimTypePage()"
            >
                Continue
            </button>
            `;

    },6000);
}

function showSimTypePage(){

    hideAllPages();

    document.getElementById(
        "simTypePage"
    ).style.display = "flex";

    document.getElementById(
        "cornerLogo"
    ).style.display = "block";
}

function selectSimType(type, card){

    selectedSimType = type;

    const cards =
        document.querySelectorAll(".sim-type-card");

    cards.forEach(function(item){
        item.classList.remove("selected");
    });

    card.classList.add("selected");
}

function continueSimType(){

    if(selectedSimType === ""){

        alert("Please select a SIM type.");

        return;
    }

    showPackageActivationPage();
}