import React, { useEffect } from "react";

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1 className="flex justify-center text-2xl text-black font-bold">
        Refund Policy
      </h1>
      <p className="text-justify flex text-s md:w-1/2 md:px-2  py-4 mx-auto w-full px-0">
        Our policy lasts 30 days. If 30 days have gone by since your purchase,
        unfortunately we can't offer you a refund or exchange. To be eligible
        for a return, your item must be unused and in the same condition that
        you received it. It must also be in the original packaging. Several
        types of goods are exempt from being returned. Perishable goods such as
        food, flowers, newspapers or magazines cannot be returned. We also do
        not accept products that are intimate or sanitary goods, hazardous
        materials, or flammable liquids or gases.
      </p>
      <div>
        <p className="text-justify flex text-s md:w-1/2 md:px-2 py-4 mx-auto w-full px-0 text-bold">
          Additional non-returnable items:
        </p>
        <ul>
          <li className="text-justify flex text-s md:w-1/2 md:px-2 py-4 mx-auto w-full px-0 ">
            1. Gift cards.
          </li>
          <li className="text-justify flex text-s md:w-1/2 md:px-2 py-4 mx-auto w-full px-0">
            2. Downloadable software products.
          </li>
          <li className="text-justify flex text-s md:w-1/2 md:px-2 py-4 mx-auto w-full px-0">
            3. Some health and personal care items.
          </li>
        </ul>
        <p className="text-justify flex text-s md:w-1/2 md:px-2 py-4 mx-auto w-full px-0">
          To complete your return, we require a receipt or proof of purchase.
          Please do not send your purchase back to the manufacturer. There are
          certain situations where only partial refunds are granted: (if
          applicable) Book with obvious signs of use CD, DVD, VHS tape,
          software, video game, cassette tape, or vinyl record that has been
          opened. Any item not in its original condition, is damaged or missing
          parts for reasons not due to our error. Any item that is returned more
          than 30 days after delivery
        </p>
        <p className="text-justify flex text-s md:w-1/2 md:px-2 py-4 mx-auto w-full px-0">
          Refunds (if applicable)
        </p>
        <p className="text-justify flex text-s md:w-1/2 md:px-2 py-4 mx-auto w-full px-0">
          Once your return is received and inspected, we will send you an email
          to notify you that we have received your returned item. We will also
          notify you of the approval or rejection of your refund. If you are
          approved, then your refund will be processed, and a credit will
          automatically be applied to your credit card or original method of
          payment, within a certain amount of days.
        </p>
        <ul className="text-justify flex text-s md:w-1/2 md:px-2 py-4 mx-auto w-full px-0 font-medium">
          Late or missing refunds (if applicable)
        </ul>
        <p className="text-justify flex text-s md:w-1/2 md:px-2 py-4 mx-auto w-full px-0 font-medium">
          The refund will be processed into your bank account or linked account
          and esstimated to arrive within 5-7 working days. If you haven't
          received a refund yet, first check your bank account again. Then
          contact your credit card company, it may take some time before your
          refund is officially posted. Next contact your bank. There is often
          some processing time before a refund is posted. If you’ve done all of
          this and you still have not received your refund yet, please contact
          us at contact@thedzire.com.
        </p>
        <ul className="text-justify flex text-s md:w-1/2 md:px-2 py-4 mx-auto w-full px-0 font-medium">
          Sale items (if applicable)
        </ul>
        <p className="text-justify flex text-s md:w-1/2 md:px-2 py-4 mx-auto w-full px-0 font-medium">
          Only regular priced items may be refunded, unfortunately sale items
          cannot be refunded.
        </p>
        <p className="text-justify flex text-s md:w-1/2 md:px-2 py-4 mx-auto w-full px-0 font-medium">
          Exchanges (if applicable)
        </p>
        <p className="text-justify flex text-s md:w-1/2 md:px-2 py-4 mx-auto w-full px-0 font-medium">
          We only replace items if they are defective or damaged. If you need to
          exchange it for the same item, send us an email at
          contact@thedzire.com and send your item to: Radha krishna Mitra Mandal
          room no .c33 Bhaskar Nagar kalwa (E) Thane.
        </p>
        <p className="text-justify flex text-s md:w-1/2 md:px-2 py-4 mx-auto w-full px-0 font-medium">
          Gifts
        </p>
        <p className="text-justify flex text-s md:w-1/2 md:px-2 py-4 mx-auto w-full px-0">
          If the item was marked as a gift when purchased and shipped directly
          to you, you'll receive a gift credit for the value of your return.
          Once the returned item is received, a gift certificate will be mailed
          to you.
        </p>
        <p className="text-justify flex text-s md:w-1/2 md:px-2 py-4 mx-auto w-full px-0">
          If the item wasn't marked as a gift when purchased, or the gift giver
          had the order shipped to themselves to give to you later, we will send
          a refund to the gift giver and he will find out about your return.
        </p>
        <p className="text-justify flex text-s md:w-1/2 md:px-2 py-4 mx-auto w-full px-0 font-semibold">
          Shipping
        </p>
        <p className="text-justify flex text-s md:w-1/2 md:px-2 py-4 mx-auto w-full px-0">
          To return your product, you should mail your product to: Radha krishna
          Mitra Mandal room no .c33 Bhaskar Nagar kalwa (E) Thane. You will be
          responsible for paying for your own shipping costs for returning your
          item. Shipping costs are non-refundable. If you receive a refund, the
          cost of return shipping will be deducted from your refund. Depending
          on where you live, the time it may take for your exchanged product to
          reach you, may vary. If you are shipping an item over ₹ 80, you should
          consider using a trackable shipping service or purchasing shipping
          insurance. We don't guarantee that we will receive your returned item.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
