import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Shield, ArrowLeft, Search, Zap, Lock, Eye, Code2, AlertTriangle, CheckCircle2 } from "lucide-react";
import { useState, useMemo } from "react";

const glossaryTerms = [
  {
    term: "Blind Signing",
    category: "Security",
    icon: <Eye className="w-6 h-6" />,
    definition: "When you sign a transaction without knowing what it actually does. It's like signing a contract in a language you don't speak while wearing a blindfold - pretty risky, right?",
    example: "Your wallet shows '0x40c10f19...' instead of 'Stake 100 CORE tokens' - that's blind signing in action.",
    riskLevel: "high"
  },
  {
    term: "ERC-7730",
    category: "Protocol",
    icon: <Code2 className="w-6 h-6" />,
    definition: "The Ethereum standard that makes transactions human-readable. It's like having a universal translator for blockchain gibberish.",
    example: "Instead of seeing hex code, you see 'Send 50 USDC to Alice' - way more chill.",
    riskLevel: "safe"
  },
  {
    term: "Clear Signing",
    category: "Feature",
    icon: <CheckCircle2 className="w-6 h-6" />,
    definition: "The opposite of blind signing! You see exactly what you're approving in plain English. No more YOLO signing sketchy transactions.",
    example: "Your Ledger shows 'Approve 1000 USDT spending' instead of mysterious hex characters.",
    riskLevel: "safe"
  },
  {
    term: "ROFL",
    category: "Technology",
    icon: <Lock className="w-6 h-6" />,
    definition: "Runtime Off-chain Logic Framework - not the laughing emoji! It's Oasis's way of running code in a super secure environment (TEE) that no one can peek into.",
    example: "Our security agent runs in ROFL to analyze your transactions privately - even we can't see your data.",
    riskLevel: "safe"
  },
  {
    term: "TEE",
    category: "Technology",
    icon: <Shield className="w-6 h-6" />,
    definition: "Trusted Execution Environment - like a digital safe inside your computer. Code runs here without anyone being able to spy on it, not even the computer's owner.",
    example: "Your transaction analysis happens in a TEE, so your privacy stays intact while getting security insights.",
    riskLevel: "safe"
  },
  {
    term: "Infinite Approval",
    category: "Security",
    icon: <AlertTriangle className="w-6 h-6" />,
    definition: "When you give a smart contract permission to spend ALL of your tokens forever. It's like giving someone your credit card and saying 'go wild' - sus af.",
    example: "Approving 'unlimited USDC' instead of just the amount you need for one transaction.",
    riskLevel: "high"
  },
  {
    term: "Delegate Call",
    category: "Security",
    icon: <AlertTriangle className="w-6 h-6" />,
    definition: "A risky function that lets one contract execute code as if it were another contract. Often used in exploits - major red flag territory.",
    example: "A sketchy contract using delegate call to drain your wallet by pretending to be a legit protocol.",
    riskLevel: "high"
  },
  {
    term: "Phishing",
    category: "Security",
    icon: <AlertTriangle className="w-6 h-6" />,
    definition: "Fake websites or contracts that look legit but are designed to steal your crypto. The digital equivalent of a wolf in sheep's clothing.",
    example: "A fake Uniswap site that steals your tokens when you try to swap - always check the URL!",
    riskLevel: "high"
  },
  {
    term: "Smart Contract",
    category: "Blockchain",
    icon: <Code2 className="w-6 h-6" />,
    definition: "Self-executing code on the blockchain. Like a vending machine - put money in, get something out, all automatic. But unlike vending machines, these can be programmed to do literally anything.",
    example: "A DEX smart contract that automatically swaps your ETH for USDC when you send it tokens.",
    riskLevel: "medium"
  },
  {
    term: "Gas Fee",
    category: "Blockchain",
    icon: <Zap className="w-6 h-6" />,
    definition: "The cost to execute transactions on the blockchain. Like paying for postage, but sometimes the stamp costs more than what you're sending (especially on Ethereum 💀).",
    example: "Paying $50 in gas fees to send $20 worth of tokens - welcome to peak Ethereum.",
    riskLevel: "medium"
  },
  {
    term: "Core DAO",
    category: "Blockchain",
    icon: <Code2 className="w-6 h-6" />,
    definition: "A blockchain network (Chain ID 1116) that focuses on Bitcoin-secured smart contracts. It's where our CoreStake contract lives and breathes.",
    example: "Staking CORE tokens on the Core DAO network to earn rewards while securing the network.",
    riskLevel: "safe"
  },
  {
    term: "Hex Data",
    category: "Technical",
    icon: <Code2 className="w-6 h-6" />,
    definition: "The raw transaction data that looks like alien language. It's actually instructions for smart contracts, but in computer speak (0x40c10f19... etc).",
    example: "0x40c10f19 actually means 'mint' function call - but who's gonna memorize that?",
    riskLevel: "medium"
  },
  {
    term: "Validator",
    category: "Blockchain",
    icon: <Shield className="w-6 h-6" />,
    definition: "Network participants who verify transactions and secure the blockchain. Think of them as digital security guards who make sure everything's legit.",
    example: "Staking your CORE tokens with a validator to help secure the network and earn rewards.",
    riskLevel: "safe"
  },
  {
    term: "Staking",
    category: "DeFi",
    icon: <CheckCircle2 className="w-6 h-6" />,
    definition: "Locking up your crypto to help secure a network and earn rewards. It's like putting money in a high-yield savings account, but for blockchain.",
    example: "Staking 100 CORE tokens to earn ~8% APY while helping secure the Core DAO network.",
    riskLevel: "safe"
  },
  {
    term: "Web3",
    category: "General",
    icon: <Shield className="w-6 h-6" />,
    definition: "The decentralized internet built on blockchain. No Big Tech middlemen, you own your data, but also no customer support when things go wrong 🤷‍♂️",
    example: "Using a DEX instead of Coinbase - you control your keys, but also your responsibility when you mess up.",
    riskLevel: "medium"
  }
];

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(glossaryTerms.map(term => term.category)));
    return ["All", ...cats];
  }, []);

  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter(term => {
      const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           term.definition.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || term.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case "high": return "text-destructive";
      case "medium": return "text-yellow-500";
      case "safe": return "text-secondary";
      default: return "text-muted-foreground";
    }
  };

  const getRiskBadge = (riskLevel: string) => {
    switch (riskLevel) {
      case "high": return <Badge variant="destructive" className="ml-2">⚠️ High Risk</Badge>;
      case "medium": return <Badge className="ml-2 bg-yellow-500/20 text-yellow-500 border-yellow-500/30">⚡ Medium Risk</Badge>;
      case "safe": return <Badge className="ml-2 bg-secondary/20 text-secondary border-secondary/30">✅ Safe</Badge>;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-primary animate-glow-pulse" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Aledgerly
            </span>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Web3 Dictionary 📚
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Confused by all the crypto jargon? We got you! Here's every Web3 and security term explained in actual English that makes sense.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search terms... (try 'blind signing' or 'ROFL')"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-card border-primary/30 text-lg py-6"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "security" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terms Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🤔</div>
              <h3 className="text-2xl font-bold mb-2">Nothing found</h3>
              <p className="text-muted-foreground">Try a different search term or category</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredTerms.map((term, index) => (
                <Card key={index} className="bg-gradient-card border-primary/30 hover:shadow-cyber transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-primary ${getRiskColor(term.riskLevel)}`}>
                          {term.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl">{term.term}</CardTitle>
                          <Badge variant="outline" className="mt-1">
                            {term.category}
                          </Badge>
                        </div>
                      </div>
                      {getRiskBadge(term.riskLevel)}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {term.definition}
                    </p>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">Example:</p>
                      <p className="text-sm italic">"{term.example}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Put This Knowledge to Use? 🚀
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Now that you speak Web3, let Aledgerly protect you from all the sketchy stuff out there.
          </p>
          <Link to="/">
            <Button variant="security" size="lg" className="text-lg px-8 py-6">
              Try Aledgerly Now <Shield className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-bold">Aledgerly</span>
              <Badge variant="secondary" className="ml-2">Web3 Security Made Simple</Badge>
            </div>
            <div className="text-sm text-muted-foreground">
              <span>Still confused? We're here to help! 🛡️</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Glossary;