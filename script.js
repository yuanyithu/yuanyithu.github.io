(function () {
  const translations = {
    en: {
      navAbout: "About",
      navResearch: "Research",
      navPublication: "Publication",
      navCv: "CV",
      navContact: "Contact",
      brandName: "Yi Yuan",
      heroEyebrow: "Quantum error correction and its implementation",
      heroName: "Yi Yuan",
      heroRole: "Ph.D. Candidate in Physics, Tsinghua University",
      heroSummary: "I work on quantum error correction and the practical questions that arise when bringing it onto real hardware. My interests sit at the intersection of QEC theory and what actually runs on noisy and early fault-tolerant devices.",
      tagQec: "Quantum Error Correction",
      tagQuantumInformation: "Quantum Information",
      tagFaultTolerant: "Fault-Tolerant Quantum Computing",
      tagQem: "Quantum Error Mitigation",
      viewPublication: "Publication",
      downloadCv: "Download CV",
      highlightAffiliationLabel: "Affiliation",
      highlightAffiliation: "Department of Physics, Tsinghua University",
      highlightEducationLabel: "Program",
      highlightEducation: "Ph.D. in Physics, 2023–2028 (expected)",
      researchEyebrow: "Research",
      researchTitle: "Research",
      researchDirection: "My current focus is quantum error correction and the implementation-level problems that stand between QEC theory and working fault-tolerant devices.",
      researchPublished: "My published work so far develops error-mitigation techniques for the noisy and early fault-tolerant regime — combining quantum error-detecting codes with probabilistic error cancellation to reshape the effective noise channel and suppress residual logical errors at reduced sampling cost.",
      publicationEyebrow: "Publication",
      publicationTitle: "Publication",
      publicationStatus: "Preprint, 2026",
      publicationBody: "This work develops a QEDC+PEC route for noisy and early fault-tolerant devices, using post-selection and probabilistic error cancellation to reshape noise and suppress residual logical errors.",
      cvEyebrow: "CV",
      cvTitle: "Curriculum Vitae",
      cvBody: "Download the English or Chinese version of my CV as a PDF.",
      cvEnglish: "English CV",
      cvChinese: "中文简历",
      contactEyebrow: "Contact",
      contactTitle: "Professional Links",
      contactVibe: "I'm also a vibe coder who enjoys exploring the possibilities AI opens up 🙂",
      footerUpdated: "Last updated"
    },
    zh: {
      navAbout: "关于",
      navResearch: "研究",
      navPublication: "论文",
      navCv: "简历",
      navContact: "联系",
      brandName: "袁逸",
      heroEyebrow: "量子纠错及其实现",
      heroName: "袁逸",
      heroRole: "清华大学物理系博士研究生",
      heroSummary: "我的研究方向是量子纠错,以及将纠错理论落实到真实硬件时出现的现实问题。我的兴趣位于量子纠错理论与真正运行在含噪和早期容错设备上的实践之间。",
      tagQec: "量子纠错",
      tagQuantumInformation: "量子信息",
      tagFaultTolerant: "容错量子计算",
      tagQem: "量子误差缓解",
      viewPublication: "论文",
      downloadCv: "下载简历",
      highlightAffiliationLabel: "单位",
      highlightAffiliation: "清华大学物理系",
      highlightEducationLabel: "培养阶段",
      highlightEducation: "物理学博士，2023–2028（预计）",
      researchEyebrow: "研究",
      researchTitle: "研究",
      researchDirection: "我目前关注量子纠错，以及横亘在量子纠错理论和可工作的容错设备之间的实现层问题。",
      researchPublished: "我目前发表的工作发展面向含噪和早期容错阶段的误差缓解技术——将量子错误探测码与概率误差抵消结合，重塑有效噪声信道，并以较低采样成本抑制剩余逻辑错误。",
      publicationEyebrow: "论文",
      publicationTitle: "论文",
      publicationStatus: "预印本，2026",
      publicationBody: "这项工作面向含噪和早期容错设备，探索通过后选择与概率误差抵消重塑噪声并抑制剩余逻辑错误的 QEDC+PEC 路径。",
      cvEyebrow: "简历",
      cvTitle: "个人简历",
      cvBody: "下载英文或中文 PDF 版本简历。",
      cvEnglish: "English CV",
      cvChinese: "中文简历",
      contactEyebrow: "联系",
      contactTitle: "专业链接",
      contactVibe: "我也是一名 vibe coder,喜欢探索 AI 带来的各种可能 🙂",
      footerUpdated: "最后更新"
    }
  };

  const root = document.documentElement;
  const languageButton = document.querySelector("[data-language-toggle]");
  const themeButton = document.querySelector("[data-theme-toggle]");
  const themeIcon = document.querySelector(".theme-icon");
  const storageKeys = {
    language: "yy-home-language",
    theme: "yy-home-theme"
  };

  function storedValue(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function setStoredValue(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      // Ignore storage errors in restricted browser contexts.
    }
  }

  function applyLanguage(language) {
    const dictionary = translations[language] || translations.en;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (dictionary[key]) {
        element.textContent = dictionary[key];
      }
    });

    root.lang = language === "zh" ? "zh-CN" : "en";
    document.title = language === "zh" ? "袁逸 | 清华大学物理系博士研究生" : "Yi Yuan | Physics Ph.D. Candidate";
    root.setAttribute("data-language", language);
    document.querySelector(".brand").setAttribute(
      "aria-label",
      language === "zh" ? "袁逸主页" : "Yi Yuan home"
    );
    languageButton.setAttribute(
      "aria-label",
      language === "zh" ? "Switch language to English" : "切换到中文"
    );
    setStoredValue(storageKeys.language, language);
  }

  function applyTheme(theme) {
    if (theme === "dark" || theme === "light") {
      root.setAttribute("data-theme", theme);
      themeIcon.textContent = theme === "dark" ? "☾" : "☼";
      themeButton.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      );
      setStoredValue(storageKeys.theme, theme);
      return;
    }

    root.removeAttribute("data-theme");
    themeIcon.textContent = "◐";
    themeButton.setAttribute("aria-label", "Switch color theme");
  }

  function currentTheme() {
    const selected = root.getAttribute("data-theme");
    if (selected === "dark" || selected === "light") {
      return selected;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  const initialLanguage = storedValue(storageKeys.language) === "zh" ? "zh" : "en";
  const initialTheme = storedValue(storageKeys.theme);

  applyLanguage(initialLanguage);
  applyTheme(initialTheme);

  languageButton.addEventListener("click", () => {
    const nextLanguage = root.getAttribute("data-language") === "zh" ? "en" : "zh";
    applyLanguage(nextLanguage);
  });

  themeButton.addEventListener("click", () => {
    const nextTheme = currentTheme() === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });
})();
