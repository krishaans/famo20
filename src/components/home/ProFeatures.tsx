import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown } from 'lucide-react';

const ProFeatures: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
      <div className="text-center mb-12">
        <div className="inline-block bg-white/10 p-4 rounded-full mb-4">
          <Crown className="w-12 h-12" />
        </div>
        <h2 className="text-4xl font-bold font-codec mb-4">Upgrade to Pro</h2>
        <p className="text-xl opacity-90">2500 LKR per month</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-4">Free Features</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="text-green-400">•</span>
              Today's market prices
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">•</span>
              Basic farming guides
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">•</span>
              Post ads up to 100,000 LKR
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">•</span>
              Basic weather updates
            </li>
          </ul>
        </div>

        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
          <h3 className="text-xl font-semibold mb-4">Pro Features</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="text-green-400">•</span>
              AI-powered price predictions
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">•</span>
              Advanced AI crop doctor
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">•</span>
              Professional account manager
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">•</span>
              Unlimited ad postings
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <button 
          onClick={() => navigate('/future-predictions')}
          className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Start 7-Day Free Trial
        </button>
      </div>
    </div>
  );
};

export default ProFeatures;