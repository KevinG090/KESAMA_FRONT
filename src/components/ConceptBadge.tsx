// Etiqueta para imágenes que son visualizaciones conceptuales generadas con IA,
// no fotografías de trabajos realizados. Ver isConceptImage() en data/catalog.ts.
export default function ConceptBadge({ className = '' }: { className?: string }) {
  return (
    <span
      title="Imagen generada con IA con fines ilustrativos. No es una fotografía de un trabajo realizado."
      className={`inline-block bg-[#1b1c1a]/75 backdrop-blur-sm text-white text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 ${className}`}
    >
      Visualización conceptual
    </span>
  )
}
