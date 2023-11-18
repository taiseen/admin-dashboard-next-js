import React from "react";

const AddUserPage = () => {
  return (
    <div className="mt-4 p-4 bg-slate-800 rounded">
      <form className="flex flex-wrap justify-between gap-4">
        <input
          type="text"
          placeholder="User Name"
          name="uName"
          required
          className="inputStyle"
        />

        <input
          type="text"
          name="uEmail"
          placeholder="user@email.com"
          className="inputStyle"
        />

        <input
          type="text"
          name="uPass"
          placeholder="Password"
          className="inputStyle"
        />

        <input
          type="tel"
          name="uPhone"
          placeholder="Phone Number"
          className="inputStyle"
        />

        <select name="uRole" className="inputStyle focus:bg-slate-800">
          <option style={{ display: "none" }}> Role &rarr; Is Admin? </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <select name="uStatus" className="inputStyle focus:bg-slate-800">
          <option style={{ display: "none" }}>Status &rarr; Is Active?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <input
          type="file"
          name="uImage"
          accept=".png, .jpg, .jpeg"
          className="inputStyle"
        />

        <textarea
          name="uAddress"
          rows={12}
          placeholder="Address"
          className="inputStyle resize-none"
        />

        <input type="submit" value="Submit" className="submitBtn" />
      </form>
    </div>
  );
};

export default AddUserPage;
