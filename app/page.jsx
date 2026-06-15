"use client";

import { useEffect, useState } from "react";

const services = [
  {
    icon: "浴",
    title: "基础洁净浴",
    text: "温水冲洗、低敏香波、护毛素、吹干梳顺，适合日常清洁和换季护理。",
  },
  {
    icon: "剪",
    title: "造型修剪",
    text: "脸部、足底、腹底、尾部和全身造型修剪，兼顾美观与日常打理。",
  },
  {
    icon: "护",
    title: "皮毛养护",
    text: "针对干燥、打结、掉毛期进行深层护毛、开结梳理和保湿护理。",
  },
  {
    icon: "净",
    title: "细节清洁",
    text: "耳道、眼周、指甲、肛门腺等细节护理，帮助宠物保持清爽舒适。",
  },
];

const slides = [
  {
    src: "/assets/store-lounge.png",
    alt: "高端宠物洗护店前台接待与主人等候区",
    title: "前台与等候区",
    text: "温润木质、柔和灯光与开放式产品陈列，主人可在舒适等候区查看护理进度。",
  },
  {
    src: "/assets/store-bathing.png",
    alt: "高端宠物洗护店专业洗护水疗区",
    title: "洗护水疗区",
    text: "防滑地面、独立浴台与清晰消毒动线，保持洗护过程干净、安静、可控。",
  },
  {
    src: "/assets/store-styling.png",
    alt: "高端宠物洗护店造型修剪与吹护区",
    title: "造型护理区",
    text: "专业修剪台、低噪吹护设备和独立工具收纳，让美容修剪更稳定细致。",
  },
];

const steps = [
  ["到店评估", "记录性格、皮肤、毛结和禁忌动作，确认主人需求。"],
  ["温和沐浴", "按宠物状态控制水温、力度和清洁产品。"],
  ["护理修整", "梳理、吹干、修剪和细节清洁同步完成。"],
  ["交付反馈", "同步护理情况、皮肤提醒和下次洗护建议。"],
];

const prices = [
  ["小型犬基础洗护", "洗澡、吹干、梳毛、耳眼清洁、剪指甲", "¥88 起"],
  ["猫咪舒缓洗护", "预约制安静时段，减少等待与噪音刺激", "¥128 起"],
  ["全身造型修剪", "含基础洗护，按品种与造型复杂度调整", "¥168 起"],
  ["深层护毛护理", "适合换毛、干燥、毛发粗糙和轻度打结", "¥58 起"],
];

const reviews = [
  ["“我家狗狗以前洗澡很紧张，这次店员会先陪它熟悉环境，吹毛也没有硬来，回家香香软软。”", "可乐主人"],
  ["“猫咪长毛打结严重，护理前会说明哪些地方要剪，过程透明，最后还给了梳毛建议。”", "年糕主人"],
  ["“店里很干净，预约时间也准。洗完会发护理反馈，耳朵和皮肤的小问题都提醒到了。”", "豆豆主人"],
];

const storeInfo = [
  ["具体地址", "上海市宜川路街道陕西北路 1620 号"],
  ["营业时间", "周一至周日 10:00 - 20:00，节假日建议提前预约"],
  ["公共交通", "可导航至“陕西北路 1620 号”，到店路线以实时地图为准"],
  ["停车指引", "周边道路与商业停车位以现场为准，建议到店前预留停车时间"],
];

function EnvironmentCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(interval);
  }, []);

  const showSlide = (index) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  return (
    <div className="carousel" aria-label="店内环境轮播图">
      <div
        className="slides"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <article className="slide" key={slide.title}>
            <img src={slide.src} alt={slide.alt} />
            <div className="slide-copy">
              <h3>{slide.title}</h3>
              <p>{slide.text}</p>
            </div>
          </article>
        ))}
      </div>
      <button
        className="carousel-btn prev"
        type="button"
        aria-label="上一张"
        onClick={() => showSlide(activeSlide - 1)}
      >
        ‹
      </button>
      <button
        className="carousel-btn next"
        type="button"
        aria-label="下一张"
        onClick={() => showSlide(activeSlide + 1)}
      >
        ›
      </button>
      <div className="dots" aria-label="选择环境图片">
        {slides.map((slide, index) => (
          <button
            className={`dot${index === activeSlide ? " active" : ""}`}
            type="button"
            aria-label={slide.title}
            key={slide.title}
            onClick={() => showSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert("预约信息已收到，我们会尽快与您确认时间。");
  };

  return (
    <>
      <header className="nav">
        <a className="brand" href="#top" aria-label="沐爪宠物洗护首页">
          <span className="brand-mark">爪</span>
          <span>沐爪宠物洗护</span>
        </a>
        <nav className="nav-links" aria-label="主导航">
          <a href="#services">服务</a>
          <a href="#environment">店内环境</a>
          <a href="#process">流程</a>
          <a href="#pricing">价格</a>
          <a href="#store-info">门店信息</a>
          <a href="#contact">预约</a>
        </nav>
        <a className="btn" href="#contact">预约到店</a>
      </header>

      <main id="top">
        <section className="hero" aria-label="宠物洗护店首页首屏">
          <div className="hero-content">
            <span className="tag">犬猫洗护 · 美容修剪 · 皮毛护理</span>
            <h1>让毛孩子干净、舒服、闪闪发光</h1>
            <p className="lead">
              从温和沐浴到造型修剪，沐爪为每只宠物定制洗护节奏。透明护理流程、独立消毒工具、预约制服务，让主人放心，也让宠物少一点紧张。
            </p>
            <div className="hero-actions">
              <a className="btn" href="#contact">立即预约</a>
              <a className="btn secondary" href="#environment">查看环境</a>
            </div>
            <div className="hero-stats" aria-label="门店亮点">
              <div className="stat">
                <strong>1 对 1</strong>
                <span>专属洗护师陪护</span>
              </div>
              <div className="stat">
                <strong>30min</strong>
                <span>到店前预留适应时间</span>
              </div>
              <div className="stat">
                <strong>每日</strong>
                <span>工具与浴区深度消毒</span>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="section-head">
            <h2>洗护服务</h2>
            <p>按体型、毛量和皮肤状态安排护理方案，避免粗暴赶时间，让宠物在稳定节奏里完成清洁。</p>
          </div>
          <div className="grid">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="environment" className="environment">
          <div className="section-head">
            <h2>店内环境</h2>
            <p>用高端宠物洗护店的空间标准划分接待、洗护与造型区域，干湿分离、动线清晰，减少宠物等待压力。</p>
          </div>
          <EnvironmentCarousel />
        </section>

        <section id="process" className="process">
          <div className="section-head">
            <h2>安心流程</h2>
            <p>每一步都可沟通确认，宠物状态优先于速度。敏感、年长或首次洗护的宠物会放慢节奏。</p>
          </div>
          <div className="steps">
            {steps.map(([title, text]) => (
              <article className="step" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing">
          <div className="section-head">
            <h2>清晰价目</h2>
            <p>到店后根据体型、毛量和打结程度确认最终价格，所有加项提前沟通。</p>
          </div>
          <div className="pricing-wrap">
            <div className="price-table" aria-label="服务价目表">
              {prices.map(([title, text, price]) => (
                <div className="row" key={title}>
                  <div>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                  <div className="price">{price}</div>
                </div>
              ))}
            </div>
            <aside className="feature-panel">
              <h3>新客首单享 8.8 折</h3>
              <p>首次到店可获一次免费的毛发状态评估，并建立宠物洗护档案。</p>
              <div className="badges">
                <span>预约制</span>
                <span>可看护理记录</span>
                <span>独立工具区</span>
                <span>敏感宠物友好</span>
              </div>
            </aside>
          </div>
        </section>

        <section id="reviews" className="reviews">
          <div className="section-head">
            <h2>主人评价</h2>
            <p>我们更在意宠物离店时的状态：毛发干净，情绪稳定，还愿意下次再来。</p>
          </div>
          <div className="review-grid">
            {reviews.map(([quote, author]) => (
              <article className="quote" key={author}>
                <p>{quote}</p>
                <strong>{author}</strong>
              </article>
            ))}
          </div>
        </section>

        <section id="store-info" className="store-info">
          <div className="section-head">
            <h2>门店信息</h2>
            <p>到店前可确认具体位置、停车与交通方式。门店位于社区商业一层，推车和航空箱进出更方便。</p>
          </div>
          <div className="store-layout">
            <div className="info-panel">
              <ul className="info-list">
                {storeInfo.map(([label, text]) => (
                  <li key={label}>
                    <strong>{label}</strong>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className="hero-actions">
                <a className="btn" href="#contact">预约到店</a>
                <a
                  className="btn secondary"
                  href="https://maps.google.com/?q=上海市宜川路街道陕西北路1620号"
                  target="_blank"
                  rel="noreferrer"
                >
                  打开地图
                </a>
              </div>
            </div>
            <div className="map-panel" aria-label="门店位置示意图">
              <img
                className="map-image"
                src="/assets/store-map-ai.png"
                alt="沐爪宠物洗护位于上海市宜川路街道陕西北路 1620 号的可爱清新风格地图"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="section-head">
            <h2>预约联系</h2>
            <p>建议提前一天预约。到店前请告知宠物年龄、体重、是否怕水或有皮肤问题。</p>
          </div>
          <div className="contact-box">
            <div>
              <h3>沐爪宠物洗护</h3>
              <ul className="contact-list">
                <li><strong>营业时间：</strong>周一至周日 10:00 - 20:00</li>
                <li><strong>门店地址：</strong>上海市宜川路街道陕西北路 1620 号</li>
                <li><strong>预约电话：</strong>021-8888-6620</li>
                <li><strong>微信预约：</strong>MuzhaoPetCare</li>
              </ul>
            </div>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="您的称呼" aria-label="您的称呼" />
              <input type="tel" name="phone" placeholder="联系电话" aria-label="联系电话" />
              <select name="service" aria-label="选择服务" defaultValue="">
                <option value="">选择服务项目</option>
                <option>基础洗护</option>
                <option>猫咪洗护</option>
                <option>造型修剪</option>
                <option>皮毛养护</option>
              </select>
              <textarea name="message" placeholder="宠物品种、体重、期望时间" aria-label="预约备注" />
              <button className="btn" type="submit">提交预约</button>
            </form>
          </div>
        </section>
      </main>

      <footer>© 2026 沐爪宠物洗护 · 用温柔和专业照顾每一只毛孩子</footer>
    </>
  );
}
