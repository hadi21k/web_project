const contact = document.querySelector(".contact");
const fullname = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const error = document.querySelector(".error");

// EmailJS IDs
const serviceId = "service_ei2g07o";
const templateId = "template_xdmcazt";
const userId = "user_d8DcekEisfi8mtui3Kt2C";

contact?.addEventListener("submit", async (e) => {
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

// manufacutring.html

const manu_cases = [
  {
    title:
      "AI Transforming Logistics: Improving Efficiency and Reducing Losses.",
    paragraph:
      "Artificial intelligence is improving the logistics industry by providing solutions for the challenges of overstocking or under-stocking inventories. AI is being used to track production floor operations, provide more accurate demand forecasting, and simplify resource management. The use of technologies like 3D printing enables manufacturers to produce serial parts in-house and manage inventories more efficiently. Additionally, AI-powered robots are being utilized as couriers to ensure uninterrupted last-mile deliveries. With AI, logistics operations are becoming more efficient, reducing losses and wastage, and increasing margins and revenue.",
    image: "images/manu/logistic.jpg",
  },
  {
    title: "AI-powered Robots in Manufacturing: Improving Process Automation",
    paragraph:
      "AI-based robots in manufacturing use machine learning algorithms to automate tasks and improve decision-making. Applications include welding, painting, drilling, product inspection, die casting, and grinding. These algorithms continuously improve, leading to better handling of processes over time.",
    image: "images/manu/manu.webp",
  },
  {
    title: "AI in Factory Automation: Improving Productivity and Efficiency",
    paragraph:
      "AI is being used to improve factory automation by reducing labor costs and increasing productivity and efficiency. AI can automate complex tasks, detect anomalies quickly through continuous tracking and monitoring, centralize operational data, reduce resources required, and allow for flexible scaling according to demand and manufacturing strategies",
    image: "images/manu/manu.webp",
  },
];

const cases = document.querySelector(".cases");

manu_cases.forEach(({ title, paragraph, image }, index) => {
  const case_container = document.createElement("div");
  case_container.classList.add("case_container");

  const span1 = document.createElement("span");
  span1.classList.add("span1");

  const span2 = document.createElement("span");
  span2.classList.add("span2");

  case_container.appendChild(span1);
  case_container.appendChild(span2);

  const case_title = document.createElement("h1");
  case_title.classList.add("case_title");
  case_title.innerHTML = title;

  const detail_btn = document.createElement("button");
  detail_btn.classList.add("detail_btn");
  detail_btn.innerHTML = "More details";

  case_container.appendChild(case_title);
  case_container.appendChild(detail_btn);

  const modal = document.createElement("div");
  modal.classList.add("case_modal");

  const img = document.createElement("img");
  img.setAttribute("src", image);

  const p = document.createElement("p");
  p.classList.add("case_paragraph");
  p.innerHTML = paragraph;

  const close = document.createElement("button");
  close.classList.add("close");
  close.innerHTML = "Close";

  modal.appendChild(img);
  modal.appendChild(p);
  modal.appendChild(close);

  case_container.appendChild(modal);

  cases?.appendChild(case_container);
});

const open_modal = document.querySelectorAll(".detail_btn");

open_modal.forEach((btn) => {
  if (btn) {
    btn.addEventListener("click", () => {
      btn.nextElementSibling.style.display = "flex";

      const close = btn.nextElementSibling.querySelector(".close");

      close.addEventListener("click", () => {
        btn.nextElementSibling.style.display = "none";
      });
    });
  }
});
