import { MarkdownRenderer } from "@/components/markown-renderer";

export default function NotesViewer() {
  // TODO: pull from mongoDB
  const note = {
    title: "Example",
    content: `Date: 2025-03-26
## Full Notes
### Confucius
- Confucianism is more like a cultural tradition
- eventually in Chinese culture, Daoism, Confucianism, and buddhism started to be treated as complementary instead of conflicting
- ideally speaking the fundamental realm of Daoism is the world of nature, including supernatural or transcendental dimensions
- Confucianism is preoccupied with the social realm
- Confucianism became a "civil religion" the formed the moral foundation for Chinese civilization
- starting in the Han dynasty, it became the dominant cultural tradition
- the term Confucianism was invented by Jesuit missionaries in China in the 16th century
- it roughly covers what was usually referred to by terms such as the "school of the scholars" (ruija) or the "teaching of the scholars" (rujiao)
- scholarly followers of the tradition were called ru "literati" or "scholars"
- meritocracy system based on Confucian learning
- Confucianism became the official ideology of the Chinese imperial state and the ruling elites
- provided a comprehensive ethical system that shaped public morals and personal behavior
    - woman are treated negatively
- central part of the educational system in traditional China
- starting in the 7th century, examination system based on Confucian scholarship
- emphasis on study and educational attainment became an essential cultural value
- elite class composed of two groups
    - official-gentry (shen): passed all exams, acquired degrees, and held government positions
    - scholar-gentry (shi): scholars outside the government
    - all exams were based on Confucian classics
    - the system produced generalists not specialists
- Confucius
    - other names: kongzi / kong fuzi / master kong
    - objective of Confucius
        - to reinstate the timeless Way (Dao) that was revealed and followed by the ancient sages, echoed the norms and designs of Heaven, and brought perfect harmony between Heaven and humanity
        - traveled extensively late in life in search of a ruler who would implement his policies, which were meant to establish proper order in the state and society
        - nobody wanted to listen to him, so he moved back to his native state and dedicated himself to teaching his disciples
        - successful as an educator, attracting a sizable group of dedicated disciples that transmitted his teachings after his death
        - first known individual to make teaching his job
        - saw himself as a restorer not a founder of a religion or a new system
- characteristics of the Confucian tradition
    - orthodoxy-conscious tradition
        - learning from the past and adapting them to the current time
    - culture-conscious tradition
        - looking at the culture of the past
    - morally conscious tradition
        - lots of emphasis on personal morality
    - socially conscious tradition
        - how does the individual fit into society
    - "this-worldly" tradition
        - focused on the issues in this life and not the afterlife
    - through an ethical and virtuous life, humans maintain cosmic harmony
    - self-cultivation happens within the society
    - importance of lessons of history - recorded in literature - to learn how to act in the present
### Confucianism
- li and ren
    - li (ritual propriety, ceremony, proper conduct)
    - ren (humanity, benevolence, human-heartedness)
    - mutually related
        - without each other, they are useless alone
    - acting according to the civilized practices of the normative tradition is a necessary ingredient of ren and making one's ren manifest through li is the only way in which li can be brought to life
    - junzi is a man of virtue who fulfilled li and ren
- situational ethics (the five key relationships)
    - father-son
    - ruler-subject
    - brother-brother
    - husband-wife
    - friend-friend
    - mostly hierarchical but also reciprocal
    - summed up in the conceptions of li and ren
- four features of the Chinese patriarchy
    - property belongs the family, not the individual
    - property belongs to the men and must be divided equally among brothers
    - fathers have legal authority over women and children
    - women are less capable than men and therefore must be under male control
- kinship and gender
    - decisively shaped by Confucian ethics
    - as a son, you have an obligation to your parents to produce a son
    - two principles of domestic hierarchy: age and gender
    - the eldest male as the "CEO of the family corporation"
    - worship at ancestral shrines as the means of reinforcing family hierarches through li
- Confucius Institute
    - teaches Chinese culture / language
    - Confucius is revered as a teacher
- Confucianism in Korea
    - became extremely influential in Korea
    - only country that preserved the biannual state-level worship ritual for Confucius and other Confucian sages
    - individual household rituals, most importantly ancestor worship
    - lots of Christians in Korea as well

## Tags`,
  };

  // TODO: separate into tabs
  return (
    <div className="w-dvw h-dvh overflow-x-scroll">
      <div className="w-fit flex flex-row">
        <div className="flex flex-row w-full">
          <MarkdownRenderer content={note.content} />
          <MarkdownRenderer content={note.content} />
          <MarkdownRenderer content={note.content} />
          <MarkdownRenderer content={note.content} />
        </div>
      </div>
    </div>
  );
}
