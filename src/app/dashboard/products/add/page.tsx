import React from "react";

const AddProductPage = () => {
  return (
    <div className="mt-4 p-4 bg-slate-800 rounded">
      <form className="flex flex-wrap justify-between gap-4">
        <input
          type="text"
          placeholder="Product Tile"
          name="pTitle"
          required
          className="inputStyle"
        />

        <select name="pCat" className="inputStyle focus:bg-slate-800">
          <option value="general">Chose Category</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
          <option value="soundBox">SoundBox</option>
        </select>

        <input
          type="number"
          name="pPrice"
          placeholder="$100"
          className="inputStyle"
        />
        <input
          type="number"
          name="pStock"
          placeholder="10"
          className="inputStyle"
        />
        <input
          type="text"
          name="pColor"
          placeholder="Black"
          className="inputStyle"
        />
        <input
          type="text"
          name="pSize"
          placeholder="Small"
          className="inputStyle"
        />
        <input
          type="file"
          name="pImage"
          accept=".png, .jpg, .jpeg"
          className="inputStyle"
        />
        <textarea
          name="desc"
          rows={12}
          placeholder="Product Description"
          className="inputStyle resize-none"
        />

        <input
          type="submit"
          value="Submit"
          className="submitBtn"
        />
      </form>
    </div>
  );
};

export default AddProductPage;
