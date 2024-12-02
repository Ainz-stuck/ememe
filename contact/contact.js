document.addEventListener('DOMContentLoaded', function () {
    const InputBox = document.getElementById('intp');
    const outputParagraph = document.querySelector('#oup .textContent');
    const kenshieImage = document.getElementById('kenshieImage');
    document.getElementById('bk').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    function displayTextWithTagsAnimated(element, htmlString, delay = 50) {
        element.innerHTML = '';
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlString;
        const childNodes = Array.from(tempDiv.childNodes);
        let fullText = '';
        let index = 0;

        childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                fullText += node.textContent;
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                fullText += node.outerHTML;
            }
        });

        function typeLetter() {
            if (index < fullText.length) {
                element.innerHTML = fullText.slice(0, index + 1);
                index++;
                setTimeout(typeLetter, delay);
            }
        }

        typeLetter();
    }

    function Sumitted(event) {
        if (event.type === 'click' || (event.type === 'keydown' && event.key === 'Enter')) {
            const InpVal = InputBox.value.trim().toLowerCase();
            let message = '';

            if (['hello', 'hi', 'hey', 'greetings', 'good morning', 'good evening', 'good afternoon', 'hola', 'howdy'].includes(InpVal)) {
                message = `
                    <strong>Hello and welcome!</strong><br><br>
                    It's great to have you here. Let me know how I can assist you today.
                `;
            } else if (InpVal.includes('thank')) {
                message = `
                    <strong>You’re welcome!</strong><br><br>
                    I’m always here to help. Let us know if you have more questions.
                `;
            } else if (InpVal.includes('bye') || InpVal.includes('goodbye') || InpVal.includes('see you')) {
                message = `
                    <strong>Goodbye for now!</strong><br><br>
                    Thank you for visiting us. Take care, and have a wonderful day!
                `;
            } else if (InpVal.includes('what are you') || InpVal.includes('who are you')) {
                message = `
                    <strong>I’m your virtual assistant!</strong><br><br>
                    Here to guide you, answer your questions, and make your experience smooth and enjoyable.
                `;
            } else if (InpVal.includes('recommend') || InpVal.includes('suggest')) {
                message = `
                    <strong>Tell me your preferences!</strong><br><br>
                    For example, you can say: "I like fresh and light fragrances" or "I prefer bold and long-lasting scents." <br>Based on that, I’ll recommend our best picks.
                `;
            } else if (InpVal.includes('fresh') || InpVal.includes('light')) {
                message = `
                    <strong>Fresh and Light Recommendations:</strong><br><br>
                    Brave Man Pour Homme: Oil-based perfume with a clean, refreshing aroma.<br>
                    Cream Cloud: A gentle fragrance that shines bright like the stars.<br>
                    Let me know if you'd like to explore these further.
                `;
            } else if (InpVal.includes('bold') || InpVal.includes('strong') || InpVal.includes('long-lasting')) {
                message = `
                    <strong>Bold and Long-lasting Recommendations:</strong><br><br>
                    NS SweetNight: Radiates depth and elegance with a charming charisma.<br>
                    COOC Solid Perfume Balm: A seductive yet balanced fragrance.<br>
                    Let me know if you'd like to learn more about these products.
                `;
            } else if (InpVal.includes('gift') || InpVal.includes('special')) {
                message = `
                    <strong>Special Gift Ideas:</strong><br><br>
                    Cream Cloud: A versatile fragrance for anyone who loves surprises.<br>
                    NS SweetNight: Perfect for a sophisticated and elegant impression.<br>
                    Feel free to ask more about these options.
                `;
            } else if (InpVal.includes('funny') || InpVal.includes('joke')) {
                message = `
                    <strong>Why did the customer bring a ladder to the store?</strong><br><br>
                    Because they heard the prices were through the roof! 😉
                `;
            } else if (InpVal.includes('how are you')) {
                message = `
                    <strong>I’m doing great, thank you for asking!</strong><br><br>
                    How can I assist you today?
                `;
            } else if (InpVal.includes('delivery') || InpVal.includes('shipping')) {
                message = `
                    <strong>Wondering about delivery?</strong><br><br>
                    Our shipping is quick and reliable. Let us know your location for more details.
                `;
            } else if (InpVal.includes('zyrill')) {
                message = `
                    <strong>Please enter</strong><br><br>
                    kenshie<br>
                    kenshie<br>
                    kenshie<br>
                    kenshie<br>
                    kenshie<br>
                    kenshie<br>
                    kenshie<br>
                    kenshie<br>
                    kenshie<br>
                    kenshie<br>
                    kenshie<br>
                    kenshie<br>
                    kenshie<br>
                    kenshie<br>
                    kenshie<br>
                    kenshie<br>
                    kenshie<br>
                    kenshie<br>
                    kenshie<br>
                    kenshie<br>
                    kenshie<br>
                    kenshie<br>
                    kenshie<br>
                    kenshie<br>
                    kenshie<br>
                `;
            } else if (InpVal.includes('kenshie')) {
                kenshieImage.classList.add('visible');
            } else {
                kenshieImage.classList.remove('visible');
                message = `
            <strong>Message sent!</strong><br><br>
            Let us know if there’s anything else we can assist with.
        `;
            }

            displayTextWithTagsAnimated(outputParagraph, message, 50);
            InputBox.value = '';
        }
    }

    function Refund(event) {
        if (event.type === 'click') {
            const message = 'To process a refund, please provide your order details. Refunds typically take 24 hours to be processed.';
            displayTextWithTagsAnimated(outputParagraph, message, 50);
        }
    }

    function Encountered(event) {
        if (event.type === 'click') {
            const message = 'Please describe the problem you encountered, and we’ll work on resolving it as quickly as possible.';
            displayTextWithTagsAnimated(outputParagraph, message, 50);
        }
    }

    document.getElementById('suB').addEventListener('click', Sumitted);
    InputBox.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            Sumitted(event);
        }
    });
    document.getElementById('b').addEventListener('click', Refund);
    document.getElementById('n').addEventListener('click', Encountered);
});
