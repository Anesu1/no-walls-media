import BannerTeam from '@/components/BannerTeam'
import TeamMember from '@/components/TeamMember'

export default function Team() {
  return (
    <>
      <BannerTeam />
      <TeamMember
        teamImage="a.png"
        title="Christoper Dhliwayo"
        role="Creative Director"
        email="chris"
        number="+263 776378653"
      >
        <p>
          A digital Da Vinci. Before a campaign is run, we need to know what
          direction or approach we're going to be taking. Enter Chris.
        </p>
        <p>
          He's the man who navigates the creative ship through the murky waters
          of mediocrity to the promised land of Artistic Excellence. He is the
          best designer in the land and that's a hill that we are willing to die
          on!
        </p>
      </TeamMember>
      <TeamMember
        teamImage="b.png"
        title="Tinashe Mudzengi"
        role="Graphic Designer"
        email="tinashe"
        number="+263 783580983"
      >
        <p>
          Aesthetics, aesthetics, aesthetics! That's what Tinashe does in short.
          He makes sure everything is pleasing to the eye and is evoking the
          desired effect from consumers.
        </p>
        <p>
          You could call him a master manipulator of moods and states. A man of
          few words, he has a simpler definition for what he does. Here's a
          quote:
        </p>
        <p>
          <span className="font-bold">&quot; Ndino designer &quot;</span> - Tinashe, 2022
        </p>
      </TeamMember>
      <TeamMember
        teamImage="c.png"
        title="Kudzai Matorevhu"
        role="Studio manager & Copywriter"
        email="kudzai"
        number="+263 775 465 163"
      >
        <p>
          A man of many words, both written and spoken, Kudzi writes just about
          everything that needs to be written at No Walls. From radio/TV scripts
          to web copy, if it's word related, he's the guy you wanna see.
        </p>
      </TeamMember>
      <TeamMember
        teamImage="d.png"
        title="Innocent Mushamba"
        role="Managing Director"
        email="innocent"
        number="+263 778793029"
      >
        <p>
          Innocent is an entrepreneur with a broad range of expertise from
          different spheres of marketing, advertising and branding. Having
          worked with a start-up, in the corporate world and in advertising, and
          also volunteering at a local NGO, he has a unique understanding of the
          ever-changing marketing landscape.
        </p>
        <p>
          As technology continues to shift, marketing will as well and that's
          where Innocent comes in. He takes a pragmatic approach in giving
          tailor-made solutions for companies; considering how the business is
          modelled, how it's positioned in the market, and sentiment analysis
          with a special regard for company culture.
        </p>
      </TeamMember>
      <TeamMember
        teamImage="e.png"
        title="Ashley Madanha"
        role="Account Coordinator"
        email="ashley"
        number="+263 782520063"
      >
        <p>
          Getting new clients on board takes some doing. Keeping them around
          requires a unique mix of charm, bureaucratic ability and a knack for
          putting out fires.
        </p>
        <p>
          Ashley has all these skills in spades and keeps all our clients
          happy, whilst also bringing new ones into the family.
        </p>
      </TeamMember>
      <TeamMember
        teamImage="g.png"
        title="Tadiwa .C. Chiwele"
        role="Digital Marketing Manager"
        email="carlton"
        number="+263 772159387"
      >
        <p>
          Marketing on the digital front is already a thing but it will
          undoubtedly continue to grow in relevance with time. Any agency worth
          its salt needs an impressive and capable digital marketing department.
        </p>
        <p>
          With multiple successful campaigns under his belt (and the numbers to
          back it up), Carlton is our digital marketing kingpin. He gets the job
          done
        </p>
      </TeamMember>
      <TeamMember
        teamImage="h.png"
        title="Tapiwa .S. Tandi"
        role="Personal Assistant / Administrator"
        email="tapiwa"
        number="+263 785165180"
      >
        <p>Copy content Pending.............................</p>
      </TeamMember>
      <TeamMember
        teamImage="i.png"
        title="Arnold .R. Gamba"
        role="Accountant"
        email="arnold"
        number="+263 778862317"
      >
        <p>
          Arnold keeps our books and financial records up to date. He does this
          with accuracy and total transparency. Everything is totally above
          board.
        </p>
        <p>
          We'd trust him with our lives - after all we already trust him with
          our money.
        </p>
      </TeamMember>
    </>
  )
}
