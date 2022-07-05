import {getSession, signIn, signOut} from 'next-auth/client'

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    }
  }
}

export default function Home({session}) {
  return (
    <div>
      {session ? (
        <button onClick={() => signOut()}>Akkauntdan Chiqish</button>
      ) : (
        <button onClick={() => signIn()}>Akkauntga Kirish</button>
              )} 

      {session && (
        <>
          <h1>Kirilgan: <span>{session.user.email}</span></h1>
          <h3>Nom: { session.user.name}</h3>
          <img src={session.user.image} alt={session.user.name} />
          
        </>
        )}
    </div>
  )
}
