import style from './AccountInfo.module.css';
import { useState, useEffect } from "react";

const AccountInfo = ({ user, onUpdate }) => {
  const [form, setForm] = useState();

  useEffect(() => {
    if (user) {
      setForm(user);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(form);
  }

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  if (!form) {
    return null;
  }
  
  return (
    <div className={style.formWrapper}>
      <form onSubmit={handleSubmit}>

        <div className={style.field}>
          <label htmlFor="name">Имя: </label>
          <input type="text" id="name" name="name" onChange={handleChange} value={form.name} />
        </div>
        <div className={style.field}>
          <label htmlFor="department">Отдел: </label>
          <input type="text" id="department" name="department" onChange={handleChange} value={form.department} />
        </div>
        <div className={style.field}>
          <label htmlFor="company">Компания: </label>
          <input type="text" id="company" name="company" onChange={handleChange} value={form.company} />
        </div>
        <div className={style.field}>
          <label htmlFor="jobTitle">Должность: </label>
          <input type="text" id="jobTitle" name="jobTitle" onChange={handleChange} value={form.jobTitle} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <button className={style.button} type="submit">
            Обновить
          </button>
        </div>

      </form>
    </div>
  )
}

export default AccountInfo;