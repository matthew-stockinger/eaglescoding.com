window.addEventListener("load", () => {

    // international phone number input field
    const input = document.querySelector("#phone");
    const iti = intlTelInput(input, {
        initialCountry: "ca",
        preferredCountries: ["ca", "us"],
        utilsScript: "js/utils.js"
    });

    // Just-validate.js initialization
    const responseBanner = document.querySelector("#response-banner");
    const val = new JustValidate('.js-form', {
        rules: {
            name: {
                required: true,
                minLength: 3,
                maxLength: 50
            },
            phoneRequired: {
                required: true
            },
            textArea: {
                required: true,
                minLength: 5,
                maxLength: 300
            }
        },
        submitHandler: (form, values, ajax) => {
            values.intl_tel = iti.getNumber();
            // without next lines, the '+' and spaces get dropped during POST.
            values.intl_tel = encodeURIComponent(values.intl_tel);
            values.intl_tel = values.intl_tel.replace(/%20/g, '+');
            values.intl_ext = iti.getExtension();
            values.intl_country = iti.getSelectedCountryData().name;
            ajax({
                url: "contact.php",
                method: "POST",
                data: values,
                async: true,
                callback: (response) => {
                    err = JSON.parse(response);
                    // if there is an error message in the response
                    if (Object.values(err).join('')) {
                        // format the error message(s)  
                        let res = "";
                        for (let e of Object.values(err)) {
                            res += e ? (e + "<br>") : "";
                        }
                        responseBanner.innerHTML = res;
                        // fade in the banner.
                        responseBanner.classList.remove("hidden");
                        responseBanner.classList.add("alert-danger", "visible");
                        // timeout overcomes css transition limitation with display.
                        setTimeout(() => {
                            responseBanner.classList.remove("opacity-0");
                            responseBanner.classList.add("opacity-1");
                        }, 30);
                    } else {
                        responseBanner.textContent = 'Thank you!  Your submission has been received.  Serious inquiries will receive a response as soon as possible.';
                        // fade in the banner.
                        responseBanner.classList.remove("hidden");
                        responseBanner.classList.add("alert-success", "visible");
                        // timeout overcomes css transition limitation with display.
                        setTimeout(() => {
                            responseBanner.classList.remove("opacity-0");
                            responseBanner.classList.add("opacity-1");
                        }, 30);
                    }
                },
                error: (response) => {
                    alert("AJAX error. Response: " + response);
                }
            });
        },
        invalidFormCallback: (errors) => {
            console.log(errors);
        }
    });
});

