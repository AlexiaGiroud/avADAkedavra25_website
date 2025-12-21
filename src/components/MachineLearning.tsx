export function MachineLearning() {
  return (
    <div className="space-y-16">
      {/* Subsection Title */}
      <div className="bg-gradient-to-r from-[#D61C8C] via-[#C07DFF] to-[#6811BA] rounded-2xl p-1">
        <div className="bg-[#000000] rounded-xl p-6">
          <h3 className="text-3xl md:text-4xl text-white uppercase tracking-tight" style={{ fontWeight: 700 }}>
            ML: Can we predict severity based on how cells communicate?
          </h3>
        </div>
      </div>

      {/* Introduction to ML */}
      <div className="bg-[#2A2A2A] rounded-xl p-8 border-2 border-[#C07DFF]/30">
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          At the end of this project, we had a final question: can disease severity be predicted from the way immune cells communicate? To explore this possibility, we turned to simple and interpretable machine learning approaches.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          We chose a Random Forest classifier and trained it on a dataset derived from an aggregation of the single-cell data. Instead of using individual cells, we summarized the data at the patient level, generating one sample per patient and per cell type. For each of these samples, we focused on a selected set of genes identified as particularly relevant in our CellPhoneDB analysis (CCL5, CCR1, CD99, PILRA, ANXA1, FPR1, CD320, JAML, CD48, and CD244) all of which are involved in immune signaling and cell-cell interactions. The expression levels of these genes were averaged to create a compact feature set capturing key aspects of immune communication. This approach allowed us to directly test whether patterns in ligand-receptor-related gene expression contain enough information to distinguish between disease severities.
        </p>
      </div>

      {/* Confusion Matrix and Feature Importance */}
      <div className="space-y-6">
        <h4 className="text-2xl md:text-3xl text-white text-center" style={{ fontWeight: 600, color: '#C07DFF' }}>
          Model Performance and Feature Importance
        </h4>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex justify-center">
            <iframe
              src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/MachineLearning/confusion_matrix_rf.html"
              className="w-full h-[600px] border-0 rounded-xl"
              title="Confusion Matrix"
              style={{ background: 'transparent' }}
            />
          </div>

          <div className="flex justify-center">
            <iframe
              src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/MachineLearning/feature_importance_rf.html"
              className="w-full h-[600px] border-0 rounded-xl"
              title="Feature Importance"
              style={{ background: 'transparent' }}
            />
          </div>
        </div>
      </div>

      {/* Interpretation */}
      <div className="bg-[#2A2A2A] rounded-xl p-8 border-2 border-[#C07DFF]/30">
        <h4 className="text-xl text-white mb-6" style={{ fontWeight: 600, color: '#C07DFF' }}>
          Interpretation of the Results
        </h4>
        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
          <p>
            The results of our Random Forest classifier suggest that immune cell communication patterns contain meaningful information about disease severity. The confusion matrix indicates that the model performs quite well overall. Classification is nearly perfect for the Healthy, Asymptomatic, and Non-COVID groups, demonstrating that the classifier can reliably distinguish diseased from non-diseased individuals. It also performs reasonably well in separating early versus late disease states. However, some misclassification occurs for the Moderate class, reflecting the inherent difficulty of defining an intermediate stage. This pattern aligns with the idea that COVID-19 severity may represent a continuous spectrum of immune system deterioration rather than strictly discrete stages.
          </p>
          <p>
            Examining the most important features identified by the model provides additional insights. Interestingly, smoker status emerges as a highly influential feature, even though causal analysis suggested it is not a confounder for the relationship between gene expression and severity, an unexpected finding that warrants further investigation. Features indicating "Healthy" status across various variables also rank highly, which makes intuitive sense. Finally, consistent with the causal analysis, age interval is confirmed as an important predictor, highlighting its well-known role in COVID-19 outcomes. These observations suggest that both patient characteristics and immune cell communication patterns jointly shape the ability to predict disease severity.
          </p>
        </div>
      </div>

      {/* Interactive Widget Introduction */}
      <div className="bg-gradient-to-br from-[#D61C8C]/20 to-[#6811BA]/20 rounded-xl p-8 border-2 border-[#C07DFF]/50">
        <h4 className="text-2xl text-white mb-4 text-center" style={{ fontWeight: 600, color: '#FFC9E9' }}>
          Test the Model Yourself!
        </h4>
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          Earlier, you tried to guess the disease severity based on immune cell patterns. Now it's the model's turn. In this interactive widget, the machine learning model described above is challenged to predict the severity of a randomly selected cell it has never seen before: can it do better than you? As the model also uses detailed gene expression information to predict the severity, it should!
        </p>
      </div>

      {/* Severity Predictor Widget */}
      <div className="space-y-6">
        <div className="flex justify-center">
          <iframe
            src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/MachineLearning/severity_predictor_java_widget.html"
            className="w-full h-[700px] border-0 rounded-xl"
            title="Severity Predictor Widget"
            style={{ background: 'transparent' }}
          />
        </div>
      </div>
    </div>
  );
}