import React, { useEffect, useRef } from 'react'
import { fabric } from 'fabric'
import { Download } from 'lucide-react'
import jsPDF from 'jspdf'

export default function App() {
  const fabricRef = useRef(null)

  useEffect(() => {
    fabricRef.current = new fabric.Canvas('rebt-canvas', {
      backgroundColor: '#ffffff',
      isDrawingMode: true,
    })
    fabricRef.current.freeDrawingBrush.width = 4
    fabricRef.current.setHeight(600)
    fabricRef.current.setWidth(1000)

    const rect = new fabric.Rect({
      left: 100,
      top: 80,
      fill: 'rgba(0, 120, 255, 0.25)',
      width: 160,
      height: 120,
      selectable: true,
    })
    fabricRef.current.add(rect)

    return () => {
      if (fabricRef.current) {
        fabricRef.current.dispose()
        fabricRef.current = null
      }
    }
  }, [])

  const exportPDF = () => {
    const canvas = fabricRef.current
    if (!canvas) return
    const dataURL = canvas.toDataURL({ format: 'png', multiplier: 2 })
    const pdf = new jsPDF({
      orientation: canvas.getWidth() >= canvas.getHeight() ? 'landscape' : 'portrait',
      unit: 'px',
      format: [canvas.getWidth(), canvas.getHeight()],
    })
    pdf.addImage(dataURL, 'PNG', 0, 0, canvas.getWidth(), canvas.getHeight())
    pdf.save('rebt-canvas.pdf')
  }

  const clearCanvas = () => {
    if (!fabricRef.current) return
    fabricRef.current.clear()
    fabricRef.current.setBackgroundColor('#ffffff', fabricRef.current.renderAll.bind(fabricRef.current))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl bg-white rounded-lg shadow p-4">
        <header className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">REBT — Lienzo</h1>
          <div className="flex gap-2">
            <button
              onClick={exportPDF}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700"
              title="Exportar a PDF"
            >
              <Download size={16} />
              Exportar PDF
            </button>
            <button
              onClick={clearCanvas}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Limpiar
            </button>
          </div>
        </header>

        <div className="overflow-auto">
          <canvas id="rebt-canvas" className="w-full border" />
        </div>
      </div>
    </div>
  )
}