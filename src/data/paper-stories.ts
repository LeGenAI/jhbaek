type StorySection = {
  heading: string;
  text: string;
  figures: number[];
  after?: string;
};

export const paperStories: Record<string, StorySection[] | undefined> = {
  'regulatory-rag-llm-understanding': [
    {
      heading: 'Does reserve duty count as an excused absence?',
      text: 'A Sogang student asks whether missing class for military reserve training is excused. Figure 1 shows how the question reaches a chatbot with no access to the university rules. It offers plausible advice, but a student needs to know what this particular university allows.',
      figures: [1],
    },
    {
      heading: 'What if we give the model the rulebook?',
      text: 'Follow the question in Figure 3. Before answering, the system looks up passages with wording similar to the question. Figure 2 gives the recipe for building and searching that index. In the reserve-duty example, the passages retrieved this way still left the model unable to find the relevant provision.',
      figures: [3, 2],
    },
    {
      heading: 'Follow the reference to the rule that settles the question',
      text: 'University regulations refer to other provisions. Each line in Figure 6 records a relationship that a reader could follow through the documents. Our system looks up entities mentioned in the question, follows their connections, and gives the model that material alongside the matching passages. Figures 5 and 4 show where the two sources meet.',
      figures: [6, 5, 4],
      after: 'In the paper’s example, the answer now identifies reserve training as an excused absence for the days specified in the notice. Across our evaluation, Table 3 scores how well the answers’ claims were supported by the supplied text. On a scale up to 1, the score rose from 0.164 without retrieval to 0.646 with passage retrieval and 0.772 with the graph.',
    },
  ],
  'symmetric-sudoku-perfect-codes': [
    {
      heading: 'Can four numbers determine an entire board?',
      text: 'Try the left puzzle in Figure 4. Each row, column, and colored region must contain 1 through 5. Trace one color across the edge of the board and its pieces form a cross. A perfect code tells us where to place the centers so that the crosses cover every square exactly once.',
      figures: [4],
      after: 'The four given numbers force a unique solution. Erase any one of them and several solutions become possible. The puzzle on the right has seven clues and the same property. This is what we mean by a minimal puzzle.',
    },
    {
      heading: 'When are two finished boards the same?',
      text: 'Rotate a finished grid or slide it across an edge and wrap it around. Figure 1 lets you follow one grid through these moves. If we count only up to renaming the digits, there are 17 five-by-five solutions. Allow the rotations and translations defined in the paper and those solutions fall into the four groups in Figure 3.',
      figures: [1, 3],
    },
    {
      heading: 'Change the regions and the puzzle changes',
      text: 'Figure 5 gives two color maps for an eight-by-eight board. Pick a color and follow its squares to see which cells must contain different digits. Figure 2 shows how a completed grid moves under the symmetries. Figure 6 takes digits away again, leaving minimal puzzles with ten and eighteen clues.',
      figures: [5, 2, 6],
    },
    {
      heading: 'How much guessing does a puzzle take?',
      text: 'Each point in Figure 7 is a five-by-five puzzle. Its height measures the extra digit placements a solver made when it guessed and had to backtrack, averaged over 100 runs. Points of one color have the same number of clues. Their different heights show how much the placement of those clues can matter.',
      figures: [7],
    },
  ],
  'hybrid-multimodal-genai-math-figures': [
    {
      heading: 'Which two prices would you use?',
      text: 'Read the tops of the shortest and tallest bars in Figure 4. They give 10 and 17 dollars, a 70% increase from the lower price. A system that extracted the text used the axis endpoints, 0 and 20 dollars. Its arithmetic already had the wrong inputs before it began.',
      figures: [4],
    },
    {
      heading: 'Let the solver consult the page it is reading',
      text: 'Figure 2 follows a page through optical character recognition, which turns it into searchable text. Figure 3 keeps the page as an image and uses ColPali to match the question to visual content. We paired that visual information with a language model to do the reasoning. Figure 1 shows the transformer architecture that supplies background for these models.',
      figures: [2, 3, 1],
    },
    {
      heading: 'Reading one bar correctly can still give the wrong answer',
      text: 'In Figure 5, 60 people chose blue. To get their share, the solver must also recover the full sample of 250. Using 200 as the denominator gives 30% instead of 24%. Figure 6 asks for the share of grades A through D, so the solver must count several bars before dividing.',
      figures: [5, 6],
    },
    {
      heading: 'From two rectangles to a population count',
      text: 'In Figure 7, the female bar is twice the height of the male bar. Of 480 people, one of the three equal shares is male, giving 160. The chart supplies the ratio and the question supplies the total. Across the 58 statistics problems in Table 7, GPT-4o answered 31 correctly on its own and 36 with ColPali. That comparison covers this statistics subset of MathVision.',
      figures: [7],
    },
  ],
  'timegpt-gamcheon-water-level': [
    {
      heading: 'After a storm, how high will the river rise?',
      text: 'Find the river gauge on the Gamcheon watershed map in Figure 1. Rain upstream and releases from dams can change the level recorded downstream. To test a forecast, we stopped the record at a date, predicted the next few days, then moved the date forward. This lets us compare each prediction with water levels that were still in the future when it was made.',
      figures: [1],
    },
    {
      heading: 'Read the forecast where the river changes fastest',
      text: 'In Figures 8 and 9, the black line is the measured water level. Start at a peak and follow it down. The colored forecasts begin at the marked date and extend different distances into the future. Figure 8 uses past levels. Figure 9 also gives TimeGPT recent rainfall, including how much fell in 36 hours and how intense it was over six hours.',
      figures: [8, 9],
    },
    {
      heading: 'Would a simpler forecast have worked?',
      text: 'Use the same change in water level to compare the statistical models in Figures 3 and 4. A line that stays close to the last observation can look reasonable on calm days and miss a rapid change.',
      figures: [3, 4],
    },
    {
      heading: 'What changes when a model starts from the last reading?',
      text: 'Follow one arrow in Figure 2 from a past reading to a future time. A linear model adds up weighted past readings to make each prediction. Figure 5 applies that operation directly. Figure 6 separates the slowly changing trend before forecasting. Figure 7 measures changes from the last observed level and adds it back at the end. In the seven-day forecast in Table 3, this last approach scored best of the three on efficiency.',
      figures: [2, 5, 6, 7],
    },
    {
      heading: 'Does rainfall help over the full record?',
      text: 'Figures 10 and 11 widen the view to the full evaluation period. The big peaks are rare, so we also scored the errors over all forecast dates. In Table 4, using seven days to forecast the next three, the efficiency score rose from 0.1360 to 0.5031 with rainfall. A score of 1 means a perfect fit. For a 30-day forecast the corresponding scores were 0.0138 and 0.3369. Rainfall helped across this record, while dam releases remained a source of uncertainty.',
      figures: [10, 11],
    },
  ],
  'entanglement-assisted-quantum-singleton-bound': [
    {
      heading: 'A code below the predicted minimum',
      text: 'Suppose a sender wants a quantum message to survive even if some transmitted particles are lost. The sender and receiver can prepare entangled pairs in advance. How many pairs must they spend? In the left panel of Figure 1, find the star at length 18. The code uses seven pairs. At the same length the dashed BDH line calls for twelve. The vertical gap of five is the number of pairs this code saves against that prediction.',
      figures: [1],
    },
    {
      heading: 'Hold the protection fixed and count the pairs',
      text: 'Each panel of Figure 2 fixes the message size and the number and type of particles sent. Higher points protect against more losses. Moving left uses fewer shared pairs. Follow each arrow horizontally from a previously listed cost to a star. The three constructions save one, two, and six pairs at the same distance. Here the comparison is with listed codes, a different benchmark from the bound in Figure 1.',
      figures: [2],
    },
    {
      heading: 'Which part of that gap can a theorem explain?',
      text: 'Imagine erasing as many particles as the code promises to tolerate. Count what remains and compare it with twice the message size. That comparison splits the proof into three cases. Write $k$ for the number of message particles. If fewer than $2k$ transmitted particles survive the erasures, the usual bound holds. At equality, classical codes limit the size of the gap. With more survivors, the paper gives further bounds and an exact maximum for a one-qudit message.',
      figures: [3],
      after: 'The proof archive lets a reader check that each Lean proof answers the intended question. Comparator compares the proof with a separately written statement. Each challenge also includes a changed statement that should fail the comparison.',
    },
  ],
  'eaqecc-evolutionary-discovery': [
    {
      heading: 'How much shared entanglement does a code really need?',
      text: 'In Figure 3, pick a panel and read across one row. The code length stays fixed, and the horizontal axis counts entangled pairs shared before transmission. A colored cell can record a construction or a case ruled out by a check. An unmarked cell leaves the question open. We wanted to turn isolated entries like these into a rule that works at many lengths.',
      figures: [3],
    },
    {
      heading: 'Search for examples worth proving',
      text: 'Read Figure 1 from target to verification. We picked gaps in existing tables. A language model edited a program that searched for codes, then a separate evaluator checked what each candidate protected and what it cost. One change in Figure 2 is easy to see in the bottom row. The program can rotate a whole row of a generator by qubits, so one move explores a different candidate.',
      figures: [1, 2],
    },
    {
      heading: 'From a pattern to a family',
      text: 'Several small examples shared a coordinate pattern. We wrote it as a formula and proved what it does. Follow the three branches of Figure 6. They check how many independent directions the construction contains, how those directions pair with one another, and the smallest weight of a nonzero vector in the relevant space. Lean checks the algebraic certificate. The paper then applies the stabilizer correspondence to turn those facts into quantum code parameters.',
      figures: [6],
      after: 'This gives a family for prime powers $q≥3$ at lengths $n≥2q+1$, and for $q=2$ at odd lengths $n≥5$. Together with a construction that trades shared entanglement for code parameters, the family closes 54 gaps in the archived tables.',
    },
    {
      heading: 'Would the search work on lengths it had never seen?',
      text: 'Figure 4 compares programs that improved earlier proposals with programs built from independent proposals. Read the right panel at the same evaluation budget. On the held-out lengths 13 and 15, the pooled success rates reached 38.9% for iterative proposals and 11.3% for independent proposals. Figure 5 separates the two lengths and repeats executions with fresh random seeds. These plots test how reliably the search finds examples. The proof in Figure 6 establishes the family.',
      figures: [4, 5],
    },
  ],
  'solevolve-evolutionary-discovery': [
    {
      heading: 'When does a proposed solution become a result?',
      text: 'Start in the lower right of the diagram with a target, such as a code of a specified length and distance. SolEvolve lets a language model change the program that searches for a solution. In the upper right, a SAT solver looks for an assignment that satisfies the encoded constraints. The check on the upper left tests the resulting candidate against the original target. A failure gives the search something specific to repair.',
      figures: [1],
    },
    {
      heading: 'A result small enough to check again',
      text: 'Arrange seven binary digits in a circle and rule out any string containing four consecutive ones, even across the join. That leaves 99 legal strings. One saved construction consists of just 15 strings called centers. For each center, mark the center itself and every legal string one digit change away. A perfect partition means that every one of the 99 strings is marked exactly once. A reader can repeat that count from the saved centers.',
      figures: [],
      after: 'The reviewer command checks three such partitions alongside three code embeddings and one claim about codeword weights. It reads the saved constructions and writes a verification report without making a language-model call.',
    },
  ],
  'self-dual-codes-building-up': [
    {
      heading: 'Can you recover the smaller code inside this matrix?',
      text: 'A code is a collection of allowed strings. Here every symbol takes one of thirteen values. The rows in Figure 1 generate all the allowed strings by taking combinations of rows. Read the border first. The blue row and the orange pair of columns mark the new pieces used to build a length-20 code from a length-18 parent. The heavy lines show where the parent sits inside the larger construction.',
      figures: [1],
      after: 'A self-dual code consists exactly of the strings whose dot product with every codeword is zero, with arithmetic in the chosen field. Adding two arbitrary columns could destroy that property. We choose a correction vector and a pair of coordinates so the extended rows still satisfy the required products. In this example we can run the reduction and the construction in reverse and recover the same code up to the recorded permutation.',
    },
    {
      heading: 'What has to stay fixed in the general proof?',
      text: 'The order of the paired coordinates matters. Look back at the new pair in the top row. Swapping the columns changes which entry is first. In version 2, Theorem 3.15 fixes the ordered pairing and describes the matrix form obtained for each rank. The linked Comparator specification records the precise Lean statements for this version, so a reader can check which normalization the formal proof addresses.',
      figures: [],
    },
  ],
};
