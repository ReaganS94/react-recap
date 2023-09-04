export default function DisplayAdditionalData({ user }) {
  return (
    <>
      <h1>Tel.: {user.tel}</h1>
      <h1>Address: {user.address}</h1>
    </>
  );
}
