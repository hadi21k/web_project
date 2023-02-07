const form = document.querySelector("form");
const fullname = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const error = document.querySelector(".error");

// EmailJS IDs
const serviceId = "service_ei2g07o";
const templateId = "template_xdmcazt";
const userId = "user_d8DcekEisfi8mtui3Kt2C";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    from_name: fullname.value,
    from_email: email.value,
    message: message.value,
  };
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (fullname.value && email.value && message.value) {
    if (emailRegex.test(email.value)) {
      try {
        fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: userId,
            template_params: data,
          }),
        });
      } catch (err) {
        console.error(err);
      } finally {
        alert("Message Sent");
        form.reset();
      }
    } else {
      error.innerHTML = "Please enter a valid email";
      error.style.color = "red";
      error.style.textAlign = "center";
      error.style.fontWeight = "bold";
    }
  } else {
    error.innerHTML = "Please fill in all fields";
    error.style.color = "red";
    error.style.textAlign = "center";
    error.style.fontWeight = "bold";
  }
});

const items = [
  {
    title: "Home",
    link: "home.html",
  },
  {
    title: "How it works",
    link: "works.html",
  },
  {
    title: "Future of AI",
    link: "future.html",
  },
  {
    title: "Opportunities",
    link: "opport.html",
  },

  {
    title: "ChatGPT",
    link: "chatgpt.html",
  },
  {
    title: "AI in Manufacturing",
    link: "manu.html",
  },
  {
    title: "AI in Education",
    link: "education.html",
  },
];

const side_menu = document.querySelector(".side_menu");
const menu = document.querySelector(".menu");
const first = document.querySelector(".top");
const mid = document.querySelector(".mid");
const last = document.querySelector(".last");

items.forEach((item) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.setAttribute("href", item.link);
  a.innerHTML = item.title;
  li.appendChild(a);
  side_menu.appendChild(li);
});

menu.addEventListener("click", () => {
  side_menu.classList.toggle("show_menu");
  first.classList.toggle("top_menu");
  mid.classList.toggle("mid_menu");
  last.classList.toggle("last_menu");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    side_menu.classList.remove("show_menu");
    first.classList.remove("top_menu");
    mid.classList.remove("mid_menu");
    last.classList.remove("last_menu");
  }
});

document.addEventListener("click", (e) => {
  if (e.target !== menu) {
    side_menu.classList.remove("show_menu");
    first.classList.remove("top_menu");
    mid.classList.remove("mid_menu");
    last.classList.remove("last_menu");
  }
});
