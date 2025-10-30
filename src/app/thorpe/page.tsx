export default function Thorpe() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        body {
          background-image: none !important;
        }

        .thorpe-main {
          position: relative;
          min-height: 100vh;
          background-image: url('/BG-2.png') !important;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }

        .thorpe-main::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('/BG-2.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          z-index: -1;
        }

        @media (max-width: 768px) {
          .thorpe-main {
            background-image: none !important;
          }
          .thorpe-main::before {
            background-image: url('/BG-thorpemob.png') !important;
            transform: rotate(-90deg);
            width: 100vh;
            height: 100vw;
            top: 50%;
            left: 50%;
            margin-left: -50vh;
            margin-top: -50vw;
          }
        }
      `}} />
      <main className="thorpe-main">
        <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-cyan-50 leading-tight mb-4">
              Introducing Thorpe
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              Baby steps towards movement intelligence
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-8">
            <p className="text-lg text-blue-100/90 leading-relaxed mb-6">
              Today we introduce our first foundation model for human movement. Named after the great Jim Thorpe, double gold medallist at the 1912 Stockholm Olympics. Thorpe represented the true pinnacle of human movement, excelling in a wide variety of sports, including the decathlon, a sport close to the hearts of all the founders here at Jeani.
            </p>
            <p className="text-lg text-blue-100/90 leading-relaxed mb-6">
              Thorpe is a 25M parameter model, trained using MAE to capture high level embeddings of the underlying movement data.
            </p>
          </div>

          {/* The Transformer Revolution */}
          <div className="mb-8">
            <p className="text-lg text-blue-100/90 leading-relaxed mb-6">
              LLMs have had a spectacular impact on the world, but they are necessarily downstream of the truly transformational technology; the transformer. Transformer based models have eaten everything in ML, from language to vision models to time series estimations, the transformer reigns supreme. This revolution is the cornerstone of our approach to creating large scale models at Jeani. The transformer is the best methodology we have for understanding complex relationships in data, movement data is no different. We next faced two very important questions, how do we tokenize movement data, and how should we approach context length?
            </p>
          </div>

          {/* Tokenisation Section */}
          <div className="mb-8">
            <h2 className="text-3xl text-cyan-50 mb-6 font-bold">Tokenisation</h2>
            <p className="text-lg text-blue-100/90 leading-relaxed mb-6">
              When approaching the idea of tokenising a novel information source, we must consider the following. What is the atomic unit? Other models have used 1 token per sensor reading, I believe this is fundamentally the wrong approach. This is akin to training an LLM with character level tokenisation. Not only is this computationally expensive, but it loses semantic meaning. I believe the atomic unit of movement is the gait cycle. The information contained in each step is rich with insight into the state of the musculoskeletal system. For this reason I chose to use 1 second of data as one token. This is the average time to take two complete steps when walking; a full cycle of the human body. There are obvious breakdowns when it comes to running and other higher intensity exercises, investigations into how our model represents this data will be extremely interesting. I anticipate our approach to tokenisation will evolve over time, but remain extremely confident this is best approach to start with.
            </p>
          </div>

          {/* Context Length Section */}
          <div className="mb-8">
            <h2 className="text-3xl text-cyan-50 mb-6 font-bold">Context length</h2>
            <p className="text-lg text-blue-100/90 leading-relaxed mb-6">
              Context for this model was the result of computational constraints. More context is likely to learn more interesting embeddings of global movement phenomena. Weighing the tradeoffs between utilizing more samples and using a larger context window, the literature suggested more samples were more beneficial. There is an argument for domain specificity in there also. Opening up the context window to larger time frames risks blending different activities and drowning in noise. This will be more of a concern when training downstream task-specific models. For this, our foundation model, 20 seconds of context allows for computational efficiency, relationships between multiple gait cycles to be learned and embedded into the encoder. This encoder is very flexible, and can be adapted to different learning tasks that may require more (or less) temporal context.
            </p>
          </div>

          {/* Scaling Section */}
          <div className="mb-8">
            <h2 className="text-3xl text-cyan-50 mb-6 font-bold">Scaling</h2>
            <p className="text-lg text-blue-100/90 leading-relaxed mb-6">
              I have made great efforts to convey that Jeani is not about cardiovascular health. Cardiovascular health is served immensely well by a multitude of different companies. We have no intention of competing in this space. With that said, to demonstrate the capabilities of our model, we added a 2 layer MLP to Thorpe and trained a predictive model for METs (Metabolic Equivalents of Task). This is because there is plenty of data out there to validate against and compare to. Our model, trained on a very small subset of the total data, <span className="text-white font-bold">achieved SOTA performance on this task, beating the best published model by 11%</span>. Further to that, we used purely accelerometer data, with other models using accelerometer and heart rate combined. This comes with all the typical caveats, this is in silico, and has not been validated out of distribution. There could certainly be better models unpublished. Nevertheless we achieved this with a total compute cost &lt;$30. Over 2/3 of which was the final training run of the MAE.
            </p>
            <p className="text-lg text-blue-100/90 leading-relaxed mb-6">
              There are two fundamental scaling axes we must contend with to push forwards. The first is data. We trained this model on the open source dataset Capture24. This dataset contains roughly 3600 hours of user data. Our current operations are collecting this amount of data every 3 weeks and we intend on ramping this up significantly. We intend to train our next model on roughly 10x the amount of data, allowing us to scale up towards 100M parameters. For context, this is similar to the size of the original GPT. To speculate for a second about how the scaling laws apply to the movement domain, much remains unknown. Information density of accelerometry is unclear, our tokenisation strategy is far from finalised. Decisions on model size have been guided by the chinchilla ratios, an observation from language models. We intend to investigate the information density of movement data to guide our scaling ratios going forwards.
            </p>
            <p className="text-lg text-blue-100/90 leading-relaxed mb-6">
              This brings us to the next axis. Compute. The scaling law is one of the simplest and most beautiful observations in technology. The difference for us is we are right at the bottom of the curve. At 25M parameters we have a model one quarter the size of GPT-1. The gains from scaling at the bottom of this curve will be immense. This is a simple capital problem. To speculate, I would suggest our current model will be able to identify minor movement anomalies already present. Some of the most interesting problems in kinesiology such as movement disease prediction, individual biomechanics optimisation, and chronic pain genesis are extremely hard problems. Future models in the multi billion parameter range have these problems in their sights. We are fortunate to be riding the tailwinds of collapsing compute cost, falling significantly faster than Moores law. Large models are becoming more and more accessible to more specialised applications such as our own.
            </p>
          </div>

          {/* Closing Vision */}
          <div className="mb-8">
            <p className="text-lg text-blue-100/90 leading-relaxed mb-6">
              Human health is increasingly digitised: our heart rate monitored 24/7, microbiome analysed daily, protein markers inspected, and blood glucose interrogated for our personal relationships to different foods. There is a glaring hole in the part of health we all strive for. Movement intelligence will not simply extend our life, but extend our living. Movement longevity means more family hiking trips, more activities shared with friends, more of your potential realised.
            </p>
            <p className="text-xl text-white font-bold leading-relaxed text-center">
              Movement is the next frontier of human longevity. We intend to be at the tip of the spear.
            </p>
          </div>

          {/* Author and date */}
          <div className="mt-16 mb-8">
            <p className="text-blue-100/60 text-sm">
              Stuart Bladon<br />October 29th 2025
            </p>
          </div>

          {/* Bottom spacer */}
          <div className="h-32 md:h-48"></div>
        </div>
      </section>
    </main>
    </>
  );
}
