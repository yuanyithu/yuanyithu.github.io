(function () {
  const translations = {
    en: {
      navAbout: "About",
      navResearch: "Research",
      navPublications: "Publications",
      navProjects: "Projects",
      navCv: "CV",
      navContact: "Contact",
      heroEyebrow: "Quantum computing and quantum information",
      heroRole: "Ph.D. Candidate in Physics, Tsinghua University",
      heroSummary: "I study quantum error mitigation and quantum error detection for near-term noisy quantum devices, with a focus on making theoretical protocols computationally testable and useful for realistic systems.",
      tagQuantumComputing: "Quantum Computing",
      tagQuantumInformation: "Quantum Information",
      tagQec: "Error Detection",
      tagMitigation: "Error Mitigation",
      viewPublication: "View Publication",
      downloadCv: "Download CV",
      highlightAffiliationLabel: "Affiliation",
      highlightAffiliation: "Department of Physics, Tsinghua University",
      highlightEducationLabel: "Program",
      highlightEducation: "Ph.D. in Physics, 2023-2028 expected",
      highlightExamLabel: "Qualifying Exam",
      highlightExam: "Ranked 1st in Modern Physics",
      researchEyebrow: "Research",
      researchTitle: "Research Focus",
      focusQuantumTitle: "Quantum error mitigation",
      focusQuantumBody: "Developing probabilistic error cancellation protocols that combine post-selection and quantum error-detecting codes to reduce sampling overhead on noisy devices.",
      focusShadowTitle: "Classical shadows",
      focusShadowBody: "Using tensor-network methods to analyze the error-mitigation complexity of classical shadows in noisy logarithmic-depth quantum circuits.",
      focusAnnealingTitle: "Quantum annealing",
      focusAnnealingBody: "Studying complexity mechanisms in quantum annealing and classical QMC through imaginary-time spacetime instanton action.",
      publicationsEyebrow: "Publication",
      publicationsTitle: "Selected Publication",
      publicationBody: "A perturbative QEDC+PEC protocol for near-term noisy quantum devices, using post-selection to reshape the effective noise channel and probabilistic error cancellation to cancel residual logical errors.",
      projectsEyebrow: "Projects",
      projectsTitle: "Technical Projects",
      projectZenoTitle: "Zeno-enhanced QEDC+PEC protocol",
      projectZenoBody: "Combined quantum error-detecting codes with probabilistic error cancellation; in 200-qubit Iceberg-code logical GHZ preparation, reduced sampling overhead by 3-4 orders of magnitude relative to standard PEC while maintaining F ~= 0.956.",
      projectShadowTitle: "Classical Shadow error mitigation",
      projectShadowBody: "Computed and analyzed the error-mitigation complexity of classical shadows on noisy quantum circuits using tensor-network methods.",
      projectLlmTitle: "LLM paper summarization tool",
      projectLlmBody: "Built a local tool that fetches daily arXiv papers and generates structured summaries through the Kimi API.",
      projectSeviMeta: "Selected",
      projectSeviTitle: "SEVI particle scattering analysis",
      projectSeviBody: "Built a PyTorch-based CNN to fit scattering-amplitude parameters, reaching analytical-method accuracy without injecting prior knowledge.",
      skillsEyebrow: "Skills",
      skillsTitle: "Technical Skills",
      skillProgrammingTitle: "Programming",
      skillMlTitle: "AI and ML",
      skillToolsTitle: "Tools",
      cvEyebrow: "CV",
      cvTitle: "Curriculum Vitae",
      cvBody: "Download the English or Chinese version of my CV as a PDF.",
      cvEnglish: "English CV",
      cvChinese: "中文简历",
      honorsEyebrow: "Experience",
      honorsTitle: "Honors and Leadership",
      honorsBody: "Tsinghua Alumni - Zhang Mingwei Scholarship; multiple Department of Physics scholarships for academic excellence, innovation, and overall achievement; Outstanding Student Leader.",
      leadershipBody: "Student Counselor, Department of Physics, Tsinghua University; Youth League Branch Secretary for a Class A branch.",
      contactEyebrow: "Contact",
      contactTitle: "Professional Links",
      footerUpdated: "Last updated"
    },
    zh: {
      navAbout: "关于",
      navResearch: "研究",
      navPublications: "论文",
      navProjects: "项目",
      navCv: "简历",
      navContact: "联系",
      heroEyebrow: "量子计算与量子信息",
      heroRole: "清华大学物理系博士研究生",
      heroSummary: "我的研究方向是面向近期含噪量子设备的量子误差缓解与量子错误探测，重点关注如何将理论协议转化为可计算、可验证并适用于实际系统的方案。",
      tagQuantumComputing: "量子计算",
      tagQuantumInformation: "量子信息",
      tagQec: "错误探测",
      tagMitigation: "误差缓解",
      viewPublication: "查看论文",
      downloadCv: "下载简历",
      highlightAffiliationLabel: "单位",
      highlightAffiliation: "清华大学物理系",
      highlightEducationLabel: "培养阶段",
      highlightEducation: "物理学博士，预计 2028 年毕业",
      highlightExamLabel: "资格考试",
      highlightExam: "现代物理方向排名第 1",
      researchEyebrow: "研究",
      researchTitle: "研究方向",
      focusQuantumTitle: "量子误差缓解",
      focusQuantumBody: "发展结合后选择与量子错误探测码的概率误差抵消协议，以降低含噪量子设备上的采样开销。",
      focusShadowTitle: "经典影子",
      focusShadowBody: "使用张量网络方法分析含噪对数深度量子线路中经典影子的误差缓解复杂度。",
      focusAnnealingTitle: "量子退火",
      focusAnnealingBody: "基于虚时间时空瞬子作用量研究量子退火与经典 QMC 中的复杂度机制。",
      publicationsEyebrow: "论文",
      publicationsTitle: "代表论文",
      publicationBody: "面向近期含噪量子设备的微扰型 QEDC+PEC 协议，通过后选择重塑有效噪声信道，并使用概率误差抵消消除剩余逻辑错误。",
      projectsEyebrow: "项目",
      projectsTitle: "技术项目",
      projectZenoTitle: "Zeno 增强的 QEDC+PEC 协议",
      projectZenoBody: "结合量子错误探测码与概率误差抵消；在 200 比特 Iceberg-code 逻辑 GHZ 制备中，相比标准 PEC 将采样开销降低 3-4 个数量级，同时保持 F ~= 0.956。",
      projectShadowTitle: "经典影子误差缓解",
      projectShadowBody: "使用张量网络方法计算并分析含噪量子线路上经典影子的误差缓解复杂度。",
      projectLlmTitle: "LLM 论文总结工具",
      projectLlmBody: "构建本地部署工具，自动获取每日 arXiv 论文，并通过 Kimi API 生成结构化总结。",
      projectSeviMeta: "项目",
      projectSeviTitle: "SEVI 粒子散射分析",
      projectSeviBody: "基于 PyTorch 构建 CNN 拟合散射振幅参数，在不注入先验知识的情况下达到解析方法精度。",
      skillsEyebrow: "技能",
      skillsTitle: "技术能力",
      skillProgrammingTitle: "编程",
      skillMlTitle: "AI 与机器学习",
      skillToolsTitle: "工具",
      cvEyebrow: "简历",
      cvTitle: "个人简历",
      cvBody: "下载英文或中文 PDF 版本简历。",
      cvEnglish: "English CV",
      cvChinese: "中文简历",
      honorsEyebrow: "经历",
      honorsTitle: "荣誉与工作经历",
      honorsBody: "清华大学校友 - 张明为奖学金；多次获得物理系学业优秀、创新创业和综合优秀奖学金；优秀学生干部。",
      leadershipBody: "清华大学物理系学生辅导员；曾任团支部书记，所在支部获评甲级团支部。",
      contactEyebrow: "联系",
      contactTitle: "专业链接",
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
    root.setAttribute("data-language", language);
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
