import React, { useEffect } from "react";

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1 className="flex justify-center text-2xl text-black font-extrabold">
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
        <p className="text-justify flex text-s w-1/2 px-2 py-4 mx-auto text-bold">
          Additional non-returnable items:
        </p>
        <ul>
          <li className="text-justify flex text-s w-1/2 px-2 py-1 mx-auto ">
            1. Gift cards.
          </li>
          <li className="text-justify flex text-s w-1/2 px-2 py-1 mx-auto">
            2. Downloadable software products.
          </li>
          <li className="text-justify flex text-s w-1/2 px-2 py-1 mx-auto">
            3. Some health and personal care items.
          </li>
        </ul>
        <p className="text-justify flex text-s w-1/2 px-2 py-4 mx-auto">
          To complete your return, we require a receipt or proof of purchase.
          Please do not send your purchase back to the manufacturer. There are
          certain situations where only partial refunds are granted: (if
          applicable) Book with obvious signs of use CD, DVD, VHS tape,
          software, video game, cassette tape, or vinyl record that has been
          opened. Any item not in its original condition, is damaged or missing
          parts for reasons not due to our error. Any item that is returned more
          than 30 days after delivery
        </p>
        <p className="text-justify flex text-s w-1/2 px-2 py-4 mx-auto">
          Refunds (if applicable)
        </p>
        <p className="text-justify flex text-s w-1/2 px-2 mx-auto">
          Once your return is received and inspected, we will send you an email
          to notify you that we have received your returned item. We will also
          notify you of the approval or rejection of your refund. If you are
          approved, then your refund will be processed, and a credit will
          automatically be applied to your credit card or original method of
          payment, within a certain amount of days.
        </p>
        <ul className="text-justify flex text-s w-1/2 px-2 py-4 mx-auto font-medium">
          Late or missing refunds (if applicable)
        </ul>
        <p className="text-justify flex text-s w-1/2 px-2 mx-auto">
          If you haven't received a refund yet, first check your bank account
          again. Then contact your credit card company, it may take some time
          before your refund is officially posted. Next contact your bank. There
          is often some processing time before a refund is posted. If you’ve
          done all of this and you still have not received your refund yet,
          please contact us at [___Company Contact Email___].
        </p>
        <ul className="text-justify flex text-s w-1/2 px-2 py-4 mx-auto font-medium">
          Sale items (if applicable)
        </ul>
        <p className="text-justify flex text-s w-1/2 px-2 mx-auto">
          Only regular priced items may be refunded, unfortunately sale items
          cannot be refunded.
        </p>
        <p className="text-justify flex text-s w-1/2 px-2 py-4 mx-auto font-medium">
          Exchanges (if applicable)
        </p>
        <p className="text-justify flex text-s w-1/2 px-2 mx-auto">
          We only replace items if they are defective or damaged. If you need to
          exchange it for the same item, send us an email at [___Company Contact
          Email___] and send your item to: 622 Manglam Electronic Market Jaipur
          Rajasthan India 302001.
        </p>
        <p className="text-justify flex text-s w-1/2 px-2 py-4 mx-auto font-medium">
          Gifts
        </p>
        <p className="text-justify flex text-s w-1/2 px-2 mx-auto">
          If the item was marked as a gift when purchased and shipped directly
          to you, you'll receive a gift credit for the value of your return.
          Once the returned item is received, a gift certificate will be mailed
          to you.
        </p>
        <p className="text-justify flex text-s w-1/2 px-2 py-3 mx-auto ">
          If the item wasn't marked as a gift when purchased, or the gift giver
          had the order shipped to themselves to give to you later, we will send
          a refund to the gift giver and he will find out about your return.
        </p>
        <p className="text-justify flex text-s w-1/2 px-2 py-3 mx-auto font-semibold">
          Shipping
        </p>
        <p className="text-justify flex text-s w-1/2 px-2 mx-auto">
          To return your product, you should mail your product to: 622 Manglam
          Electronic Market Jaipur Rajasthan India 302001. You will be
          responsible for paying for your own shipping costs for returning your
          item. Shipping costs are non-refundable. If you receive a refund, the
          cost of return shipping will be deducted from your refund. Depending
          on where you live, the time it may take for your exchanged product to
          reach you, may vary. If you are shipping an item over $75, you should
          consider using a trackable shipping service or purchasing shipping
          insurance. We don't guarantee that we will receive your returned item.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
