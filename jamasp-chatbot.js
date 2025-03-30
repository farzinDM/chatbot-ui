// Chat Widget Script
(function () {
    // Create and inject styles
    const styles = `
        /* Chatbot */
/* font */
@font-face {
    font-display: block;
    font-family: "Kalameh";
    src: url("./fonts/Kalameh-Regular.ttf");
    font-weight: 400;
}

@font-face {
    font-display: block;
    font-family: "Kalameh";
    src: url("./fonts/Kalameh-Thin.ttf");
    font-weight: 200;
}

@font-face {
    font-display: block;
    font-family: "Kalameh";
    src: url("./fonts/Kalameh-Light.ttf");
    font-weight: 300;
}

@font-face {
    font-display: block;
    font-family: "Kalameh";
    src: url("./fonts/Kalameh-Bold.ttf");
    font-weight: 700;
}

/* general */
.chatbot-btn {
    padding: 10px;
    border-radius: 12px;
    border: 3px #ffffff73 solid;
    background-color: #ffffff31;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s all ease;
}

.chatbot-btn:hover {
    background: #ffffff63;
}

.jamasp-chat-widget {
    font-family: "Kalameh", Arial, Helvetica, sans-serif;
    --chat--color-primary: var(--jamasp-chat-primary-color, #3a0ca3);
    --chat--color-primary--shadow: var(
        --jamasp-chat-primary-color--shadow,
        #570bad2f
    );
    --chat--color-secondary: var(
        --jamasp-chat-secondary-color,
        #f72585
    );
    --chat--color-secondary--shadow: var(
        --jamasp-chat-secondary-color--shadow,
        #f725852f
    );
    --chat--color-background: var(--jamasp-chat-background-color, #ffffff);
    --chat--color-font: var(--jamasp-chat-font-color, #333333);
}

.jamasp-chat-widget .chatbot-body.active {
    display: flex;
}

/* Chatbot Button */
.chatbot-button {
    background: var(--chat--color-primary);
    border-radius: 100px;
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    padding: 1rem;
    border: none;
    cursor: pointer;
    box-shadow: 0 0 0.5rem #5a5a5a80;
    z-index: -10;
    transition: 0.2s all ease;
}

.position-left {
    left: 1rem;
}

.chatbot-button:hover {
    box-shadow: -5px 5px 1rem #9e9e9e80;
    width: 75px;
    height: 75px;
}

.chatbot-button img {
    width: 100%;
    margin-top: -0.5rem;
}

/* Chatbot Header */
.chatbot {
    background: #f8f7ff;
    width: 400px;
    height: 500px;
    position: absolute;
    right: 2rem;
    bottom: 4rem;
    border-radius: 16px;
    box-shadow: -6px 6px 2rem #6b6b6b2d;
    overflow: hidden;
    padding: 1.6rem;
    z-index: 0;
}

.chatbot-hide {
    display: none;
}

.chatbot::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -140px;
    right: -140px;
    width: 450px;
    height: 450px;
    background: var(--chat--color-secondary--shadow);
    border-radius: 1000px;
    filter: blur(100px);
    z-index: -2;
}

.chatbot::before {
    content: "";
    display: block;
    position: absolute;
    top: -180px;
    left: -200px;
    width: 450px;
    height: 450px;
    background: var(--chat--color-primary--shadow);
    border-radius: 1000px;
    filter: blur(100px);
    z-index: -2;
}

.chatbot-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 1.6rem;
}

.chatbot-logo img {
    width: 2.5rem;
}

.chatbot-btn-close img {
    width: 20px;
}

/* Chatbot Body */
.chatbot-body {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 340px;
    margin-bottom: 8rem;
    overflow-y: scroll;
    scrollbar-width: none;
}

.chat {
    padding: 0.7rem;
    border-radius: 12px;
    font-size: 1rem;
    line-height: 1.4;
    max-width: 300px;
    direction: rtl;
    text-align: justify;
    border: 3px #ffffff73 solid;
    backdrop-filter: blur(10px) saturate(150%);
    z-index: -1;
    justify-self: flex-end;
}

.user-chat {
    align-self: flex-end;
    background: var(--chat--color-primary);
    color: #fff;
}

.bot-chat {
    align-self: flex-start;
    background: #ffffff4f;
    position: relative;
}

/* Chatbot Footer */
.chatbot-footer {
    position: absolute;
    bottom: 1rem;
    right: 1.6rem;
    left: 1.6rem;
    z-index: 1;
}

.chatbot-footer-countainer {
    background: #ffffff50;
    border-radius: 16px;
}

.chatbot-form {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 10px;
}

.chatbot-chat-input {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    gap: 10px;
    background: #ffffffbe;
    border-radius: 12px;
}

.chat-input {
    flex-grow: 1;
    height: 40px;
    border: none;
    text-align: right;
    background: none;
    padding-right: 10px;
    direction: rtl;
    outline: none;
    font-family: "Kalameh", Arial, Helvetica, sans-serif;
}

.chat-input::placeholder {
    font-family: "Kalameh", Arial, Helvetica, sans-serif;
}

.chatbot-btn-send-image img {
    width: 20px;
}

.chatbot-btn-send img {
    width: 20px;
}

/* Media Query */
@media screen and (max-width: 750px) {
    .chatbot {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
}

/* chatbot start new conversation */
.new-conversation {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    text-align: center;
}

.welcome-text {
    font-size: 1.4rem;
}

.new-chat-btn {
    font-family: "Kalameh", Arial, Helvetica, sans-serif;
    display: block;
    border: none;
    cursor: pointer;
    color: #fff;
    background: var(--chat--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0px 16px;
    width: 100%;
    border-radius: 12px;
    transition: 0.2s all ease;
}

.new-chat-btn:hover {
    background: #754fce;
}

.new-chat-btn svg {
    width: 20px;
    margin-top: 5px;
}

.jamasp-copyright{
    text-align: center;
    color: gray;
    font-size: 10px;
}

    `;

    // Inject styles
    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);

    // Default configuration
    const defaultConfig = {
        webhook: {
            url: "",
            route: "",
        },
        branding: {
            logo: "",
            name: "",
            welcomeText: "",
            responseTimeText: "",
            poweredBy: {
                text: "قدرت گرفته از جاماسپ ای آی",
                link: "https://jamaspai.com",
            },
        },
        style: {
            primaryColor: "",
            secondaryColor: "",
            parimaryColorShadow: "",
            secondaryColorShadow: "",
            position: "right",
            backgroundColor: "#ffffff",
            fontColor: "#333333",
        },
    };

    // Merge user config with defaults
    const config = window.ChatWidgetConfig
        ? {
              webhook: {
                  ...defaultConfig.webhook,
                  ...window.ChatWidgetConfig.webhook,
              },
              branding: {
                  ...defaultConfig.branding,
                  ...window.ChatWidgetConfig.branding,
              },
              style: {
                  ...defaultConfig.style,
                  ...window.ChatWidgetConfig.style,
              },
          }
        : defaultConfig;

    // Prevent multiple initializations
    if (window.N8NChatWidgetInitialized) return;
    window.N8NChatWidgetInitialized = true;

    let currentSessionId = "";

    // Create widget container
    const widgetContainer = document.createElement("div");
    widgetContainer.className = "jamasp-chat-widget";

    // Set CSS variables for colors
    widgetContainer.style.setProperty(
        "--jamasp-chat-primary-color",
        config.style.primaryColor
    );
    widgetContainer.style.setProperty(
        "--jamasp-chat-primary-color--shadow",
        config.style.primaryColorShadow
    );
    widgetContainer.style.setProperty(
        "--jamasp-chat-secondary-color",
        config.style.secondaryColor
    );
    widgetContainer.style.setProperty(
        "--jamasp-chat-secondary-color--shadow",
        config.style.secondaryColorShadow
    );
    widgetContainer.style.setProperty(
        "--jamasp-chat-background-color",
        config.style.backgroundColor
    );
    widgetContainer.style.setProperty(
        "--jamasp-chat-font-color",
        config.style.fontColor
    );

    const chatContainer = document.createElement("div");
    chatContainer.className = `chatbot${
        config.style.position === "left" ? " position-left" : ""
    } chatbot-hide`;

    const newConversationHTML = `
        <!-- chatbot header -->
                <div class="chatbot-header">
                    <div class="chatbot-header-left">
                        <button
                            class="chatbot-btn chatbot-btn-close"
                            id="chatbot-close"
                        >
                            <img />
                            <img
                                src="./images/icons/chevron-down.png"
                                alt="chevron down"
                            />
                        </button>
                    </div>

                    <div class="chatbot-header-right">
                        <div class="chatbot-logo">
                            <img
                                src="${config.branding.logo}"
                                alt="chatbot logo"
                            />
                        </div>
                    </div>
                </div>

            <!-- chatbot start new conversation -->
                <div class="new-conversation">
                    <h1 class="welcome-text">
                        ${config.branding.welcomeText}
                    </h1>
                    <button class="new-chat-btn">
                        <p>ارسال پیام</p>
                        <svg
                            class="message-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"
                            ></path>
                        </svg>
                    </button>

                        <div class="jamasp-copyright">
                            <p>قدرت گرفته از جاماسپ ای آي</p>
                        </div>
                </div>
    `;

    const chatInterfaceHTML = `

<!-- chatbot header -->
                <div class="chatbot-header">
                    <div class="chatbot-header-left">
                        <button
                            class="chatbot-btn chatbot-btn-close"
                            id="chatbot-close"
                        >
                            <img />
                            <img
                                src="./images/icons/chevron-down.png"
                                alt="chevron down"
                            />
                        </button>
                    </div>

                    <div class="chatbot-header-right">
                        <div class="chatbot-logo">
                            <img
                                src="${config.branding.logo}"
                                alt="chatbot logo"
                            />
                        </div>
                    </div>
                </div>

                <!-- chatbot body -->
                <div class="chatbot-body">
                    <!-- <div class="chat bot-chat">
                        سلام، چه کمکی میتونم بهتون بکنم؟
                    </div> -->
                </div>

                <!-- chatbot footer -->
                <div class="chatbot-footer chatbot-hide">
                    <div class="chatbot-footer-countainer">
                        <div class="chatbot-form">
                            <button type="submit" class="chatbot-btn chatbot-btn-send">
                                <img
                                    src="./images/icons/send.png"
                                    alt="send image icon"
                                />
                            </button>

                            <div class="chatbot-chat-input">
                                <input
                                    type="text"
                                    name="chat-input"
                                    id="chat-input"
                                    class="chat-input"
                                    placeholder="گفت و گو کنید..."
                                />
                            </div>
                        </div>
                        </div>

                        <div class="jamasp-copyright">
                            <p>قدرت گرفته از جاماسپ ای آي</p>
                        </div>
                </div>
    `;

    chatContainer.innerHTML = newConversationHTML + chatInterfaceHTML;

    const toggleButton = document.createElement("button");
    toggleButton.className = `chatbot-button${
        config.style.position === "left" ? " position-left" : ""
    }`;
    toggleButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.476 0-2.886-.313-4.156-.878l-3.156.586.586-3.156A7.962 7.962 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
        </svg>`;

    widgetContainer.appendChild(chatContainer);
    widgetContainer.appendChild(toggleButton);
    document.body.appendChild(widgetContainer);

    const newChatBtn = chatContainer.querySelector(".new-chat-btn");
    const chatInterface = chatContainer.querySelector(".chatbot-body");
    const messagesContainer = chatContainer.querySelector(".chatbot-body");
    const textarea = chatContainer.querySelector(".chat-input");
    const sendButton = chatContainer.querySelector(".chatbot-btn-send");
    const chatFooter = chatContainer.querySelector(".chatbot-footer");

    function generateUUID() {
        return crypto.randomUUID();
    }

    async function startNewConversation() {
        currentSessionId = generateUUID();
        const data = [
            {
                action: "loadPreviousSession",
                sessionId: currentSessionId,
                route: config.webhook.route,
                metadata: {
                    userId: "",
                },
            },
        ];

        try {
            const response = await fetch(config.webhook.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();
            chatContainer.querySelector(".chatbot-header").style.display =
                "none";
            chatContainer.querySelector(".new-conversation").style.display =
                "none";
            chatInterface.classList.add("active");
            chatFooter.classList.remove("chatbot-hide");

            const botMessageDiv = document.createElement("div");
            botMessageDiv.className = "bot-chat chat";
            botMessageDiv.textContent = Array.isArray(responseData)
                ? responseData[0].output
                : responseData.output;
            messagesContainer.appendChild(botMessageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        } catch (error) {
            console.error("Error:", error);
        }
    }

    async function sendMessage(message) {
        const messageData = {
            action: "sendMessage",
            sessionId: currentSessionId,
            route: config.webhook.route,
            chatInput: message,
            metadata: {
                userId: "",
            },
        };

        const userMessageDiv = document.createElement("div");
        userMessageDiv.className = "user-chat chat";
        userMessageDiv.textContent = message;
        messagesContainer.appendChild(userMessageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        try {
            const response = await fetch(config.webhook.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(messageData),
            });

            const data = await response.json();

            const botMessageDiv = document.createElement("div");
            botMessageDiv.className = "chat-message chat";
            botMessageDiv.textContent = Array.isArray(data)
                ? data[0].output
                : data.output;
            messagesContainer.appendChild(botMessageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        } catch (error) {
            console.error("Error:", error);
        }
    }

    newChatBtn.addEventListener("click", startNewConversation);

    sendButton.addEventListener("click", () => {
        const message = textarea.value.trim();
        if (message) {
            sendMessage(message);
            textarea.value = "";
        }
    });

    textarea.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            const message = textarea.value.trim();
            if (message) {
                sendMessage(message);
                textarea.value = "";
            }
        }
    });

    toggleButton.addEventListener("click", () => {
        chatContainer.classList.toggle("chatbot-hide");
    });

    // Add close button handlers
    const closeButtons = chatContainer.querySelectorAll(".chatbot-btn-close");
    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            chatContainer.classList.toggle("chatbot-hide");
        });
    });
})();
