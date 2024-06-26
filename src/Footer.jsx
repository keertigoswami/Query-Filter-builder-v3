import React from "react";

function Footer() {
  return (
    <div className="bg-gray-900 text-gray-300 p-2 w-full flex flex-col items-center justify-center">
      <h2 className="text-lg font-bold mb-2">Do's and Don'ts</h2>
      <ul className="list-disc list-inside text-center">
        <li>Do use the filter options provided to narrow down your search.</li>
        <li>Do press Enter after selecting options for operations like IN/NOT IN.</li>
        <li>Don't use invalid characters in the search input.</li>
        <li>Don't forget to remove tags that are no longer needed.</li>
      </ul>
    </div>
  );
}

export default Footer;

