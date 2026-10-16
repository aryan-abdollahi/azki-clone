// Header Section

const navItemsHeader = [
  {
    title: "بیمه ها",
    link: "#",
    hasChevron: true,
  },
  {
    title: "خسارت",
    link: "#",
    hasChevron: true,
  },
  {
    title: "اقساط و اعتبار",
    link: "/credit-service/installments",
    hasChevron: false,
  },
  {
    title: "شرکت های بیمه",
    link: "/company-insurance",
    hasChevron: false,
  },
  {
    title: "فروشنده شوید!",
    link: "/azki-agent",
    hasChevron: false,
  },
];

const navList = document.querySelector(".header-section-items");
console.log(navList);

navItemsHeader.map((item) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const img = document.createElement("img");
  li.style.display = "flex";
  li.style.justifyContent = "center";
  li.style.alignItems = "center";
  a.href = item.hasChevron ? "" : item.link;
  a.alt = item.title;
  a.textContent = item.title;
  a.style.textDecoration = "none";
  img.src = "./Assets/Icons/chevron-down.svg";
  img.alt = "chevron icon";
  img.width = "24";
  img.height = "24";
  img.style.display = !!item.hasChevron ? "inline" : "none";

  li.append(a);
  li.appendChild(img);
  navList.append(li);

  console.log(navList);
});

// Main Section

// Footer Section
