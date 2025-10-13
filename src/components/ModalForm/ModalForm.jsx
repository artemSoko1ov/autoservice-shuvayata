import React, { useState, useEffect } from "react";
import "./ModalForm.scss";
import emailjs from "emailjs-com";

const carData = {
  ВАЗ: [
    "2101",
    "2104",
    "2105",
    "2106",
    "2107",
    "2108",
    "2109",
    "21099",
    "2121",
    "2110",
    "2111",
    "2112",
    "2113",
    "2114",
    "2115",
    "Granta",
    "Priora",
    "Kalina",
    "Vesta",
    "Largus",
    "Niva",
    "Aura",
    "Iskra",
    "XRay",
    "Другое (ук. в сообщении)",
  ],
  ГАЗ: [
    "12 ЗИМ",
    "13 Чайка",
    "14 Чайка",
    "18",
    "21 Волга",
    "22 Волга",
    "24 Волга",
    "25",
    "3102 Волга",
    "31022 Волга",
    "31029 Волга",
    "3110 Волга",
    "31105 Волга",
    "2308 Атаман",
    "2330 Тигр",
    "М-20 Победа",
    "М-72",
    "ГАЗ-67",
    "Volga Siber",
    "Другое (ук. в сообщении)",
  ],
  КАМАЗ: [
    "43118",
    "4308",
    "43253",
    "5308",
    "5350",
    "65117",
    "65207",
    "6360",
    "6560",
    "4326",
    "4355",
    "4290",
    "43251",
    "5320",
    "5410",
    "Другое (ук. в сообщении)",
  ],
  МАЗ: [
    "5340",
    "5440",
    "6312",
    "6501",
    "5440B5",
    "6430",
    "6422",
    "6425",
    "5550",
    "5516",
    "5340В3",
    "5340В5",
    "6310",
    "631705",
    "4370",
    "504А",
    "503А",
    "Другое (ук. в сообщении)",
  ],
  УАЗ: [
    "3151",
    "31512",
    "31514",
    "31519",
    "3153",
    "3159 Барс",
    "3160",
    "3162 Симбир",
    "3163 Патриот",
    "3909 Буханка",
    "39094 Фермер",
    "3962 Скорая",
    "2206",
    "22069",
    "2360 Cargo",
    "23632 Пикап",
    "3303",
    "3741",
    "Hunter",
    "Cargo",
  ],
};

const initial = { phone: "", brand: "", model: "", year: "", message: "" };

function ModalForm({ onSuccess }) {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => setErrors({}), [form]);

  const validate = () => {
    const errs = {};
    const digits = form.phone.replace(/\D/g, "");

    if (!digits) errs.phone = "Введите телефон.";
    else if (digits.length < 10)
      errs.phone = "Телефон должен содержать не менее 10 цифр.";

    if (!form.brand) errs.brand = "Выберите марку.";
    if (!form.model) errs.model = "Выберите модель.";
    if (form.message && form.message.length > 500)
      errs.message = "Сообщение не должно превышать 500 символов.";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (field) => (e) => {
    let value = e.target.value;
    if (field === "phone") value = value.replace(/[^\d+]/g, "");
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleBrandChange = (e) => {
    setForm((prev) => ({ ...prev, brand: e.target.value, model: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    try {
      const templateParams = {
        phone: form.phone,
        brand: form.brand,
        model: form.model,
        year: form.year,
        message: form.message,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      setForm(initial);
      setTimeout(() => {
        setSuccess(false);
        onSuccess && onSuccess();
      }, 1200);
    } catch (error) {
      console.error("Ошибка отправки:", error);
      setErrors({ submit: "Ошибка отправки. Попробуйте ещё раз." });
    } finally {
      setSubmitting(false);
    }
  };

  const availableModels = form.brand ? carData[form.brand] || [] : [];

  return (
    <form className="modal-form" onSubmit={handleSubmit} noValidate>
      {/* Телефон */}
      <div className="modal-form__row">
        <label className="modal-form__label">
          <div>
            {" "}
            Телефон <span className="modal-form__required">*</span>
          </div>
          <input
            type="tel"
            className={`modal-form__input ${errors.phone ? "modal-form__input--error" : ""}`}
            placeholder="+7 900 000 00 00"
            value={form.phone}
            maxLength={11}
            onChange={handleChange("phone")}
          />
        </label>
        {errors.phone && (
          <div className="modal-form__error">{errors.phone}</div>
        )}
      </div>

      {/* Марка */}
      <div className="modal-form__row">
        <label className="modal-form__label">
          <div>
            Марка <span className="modal-form__required">*</span>
          </div>
          <select
            className={`modal-form__input ${errors.brand ? "modal-form__input--error" : ""}`}
            value={form.brand}
            onChange={handleBrandChange}
          >
            <option value="">Выберите марку</option>
            {Object.keys(carData).map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </label>
        {errors.brand && (
          <div className="modal-form__error">{errors.brand}</div>
        )}
      </div>

      {/* Модель */}
      <div className="modal-form__row">
        <label className="modal-form__label">
          <div>
            {" "}
            Модель <span className="modal-form__required">*</span>
          </div>
          <select
            className={`modal-form__input ${errors.model ? "modal-form__input--error" : ""}`}
            value={form.model}
            onChange={handleChange("model")}
            disabled={!form.brand}
          >
            <option value="">
              {form.brand ? "Выберите модель" : "Сначала выберите марку"}
            </option>
            {availableModels.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </label>
        {errors.model && (
          <div className="modal-form__error">{errors.model}</div>
        )}
      </div>

      {/* Год */}
      <div className="modal-form__row">
        <label className="modal-form__label">
          Год выпуска
          <input
            type="number"
            className="modal-form__input"
            placeholder="2012"
            value={form.year}
            onChange={handleChange("year")}
          />
        </label>
      </div>

      {/* Сообщение */}
      <div className="modal-form__row">
        <label className="modal-form__label">
          Сообщение
          <textarea
            className={`modal-form__textarea ${errors.message ? "modal-form__textarea--error" : ""}`}
            placeholder="Опишите проблему, удобное время и т.д."
            value={form.message}
            onChange={handleChange("message")}
            rows="4"
          />
        </label>
        {errors.message && (
          <div className="modal-form__error">{errors.message}</div>
        )}
      </div>

      {/* Ошибка отправки */}
      {errors.submit && (
        <div className="modal-form__error">{errors.submit}</div>
      )}

      {/* Успешная отправка */}
      {success && (
        <div className="modal-form__success">
          Спасибо! Мы свяжемся с вами в ближайшее время.
        </div>
      )}
      <button
        type="submit"
        className="modal-form__submit"
        disabled={submitting}
      >
        {submitting ? "Отправка..." : "Отправить заявку"}
      </button>
    </form>
  );
}

export default ModalForm;
