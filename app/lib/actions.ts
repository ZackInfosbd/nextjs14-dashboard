'use server';

export async function createInvoice(formData: FormData) {
  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };

  //   to handle multiple Form inputs
  // const rawFormData = Object.fromEntries(formData.entries());

  console.log(rawFormData);
}
