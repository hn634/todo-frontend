import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  // ユーザーが入力するデータを管理する状態
  const [formData, setFormData] = useState({
    username: "", // ユーザー名
    email: "", // メールアドレス
    password: "", // パスワード
  });

  // 入力エラーを管理する状態
  const [errors, setErrors] = useState({});

  // ページ遷移用
  const navigate = useNavigate();

  // 入力が変更されたときに実行される関数
  const handleInputChange = (e) => {
    const { name, value } = e.target; // フィールド名とその値を取得
    setFormData({
      ...formData, // 現在のフォームデータを保持
      [name]: value, // フィールド名に対応する値を更新
    });
  };

  // フォームが送信されたときに実行される関数
  const handleSubmit = (e) => {
    e.preventDefault(); // ページのリロードを防ぐ

    // 入力チェックを行い、エラーを記録
    const newErrors = {};
    if (!formData.username)
      newErrors.username = "ユーザー名を入力してください。";
    if (!formData.email) newErrors.email = "メールアドレスを入力してください。";
    if (!formData.password)
      newErrors.password = "パスワードを入力してください。";

    setErrors(newErrors); // エラーを更新

    // エラーがなければ成功メッセージを表示
    if (Object.keys(newErrors).length === 0) {
      alert("アカウント作成が完了しました！（仮）");
      navigate("/login"); // ログイン画面に遷移
    }
  };

  // スタイル設定
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    margin: "0 auto",
    maxWidth: "400px",
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box",
  };

  const errorStyle = {
    color: "red",
    fontSize: "12px",
  };

  const buttonStyle = {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  };

  const linkButtonStyle = {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "transparent",
    color: "#007bff",
    border: "none",
    textDecoration: "underline",
    cursor: "pointer",
    textAlign: "center",
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      {/* ユーザー名入力フィールド */}
      <div>
        <input
          type="text"
          name="username"
          placeholder="ユーザー名"
          value={formData.username}
          onChange={handleInputChange}
          style={inputStyle}
        />
        {errors.username && <p style={errorStyle}>{errors.username}</p>}
      </div>

      {/* メールアドレス入力フィールド */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="メールアドレス"
          value={formData.email}
          onChange={handleInputChange}
          style={inputStyle}
        />
        {errors.email && <p style={errorStyle}>{errors.email}</p>}
      </div>

      {/* パスワード入力フィールド */}
      <div>
        <input
          type="password"
          name="password"
          placeholder="パスワード"
          value={formData.password}
          onChange={handleInputChange}
          style={inputStyle}
        />
        {errors.password && <p style={errorStyle}>{errors.password}</p>}
      </div>

      {/* アカウント作成ボタン */}
      <button type="submit" style={buttonStyle}>
        アカウント作成
      </button>

      {/* ログイン画面に戻るボタン */}
      <button
        type="button"
        onClick={() => navigate("/login")}
        style={linkButtonStyle}
      >
        ログイン画面に戻る
      </button>
    </form>
  );
}

export default SignUpForm;
