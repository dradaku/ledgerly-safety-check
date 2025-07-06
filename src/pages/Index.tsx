import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Shield, Eye, Lock, Zap, ArrowRight, CheckCircle2, AlertTriangle, Code2 } from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-primary animate-glow-pulse" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Aledgerly
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/glossary" className="text-muted-foreground hover:text-foreground transition-colors">
              Glossary
            </Link>
            <Button variant="security" size="sm">
              Try It Now 🛡️
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
            🏆 Built at ETHGlobal Cannes 2025 • Ledger & Oasis Winner
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
            Stop Signing Blind. <br />
            <span className="text-4xl md:text-6xl">Start Signing Smart 🛡️</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Your Web3 cybersecurity copilot that turns scary hex into human-readable explanations. 
            No more YOLO signing — know exactly what you're approving with privacy-first risk analysis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="security" size="lg" className="text-lg px-8 py-6">
              Secure Your Transactions <Shield className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="cyber" size="lg" className="text-lg px-8 py-6">
              View Demo <Eye className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl animate-glow-pulse"></div>
            <img 
              src={heroImage} 
              alt="Aledgerly Security Dashboard" 
              className="w-full h-auto rounded-2xl shadow-security border border-primary/20 animate-float"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Web3 is Scary AF Right Now 😰
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every day, users lose millions to phishing attacks and malicious smart contracts. 
              The current signing experience is basically digital Russian roulette.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-destructive/30 hover:shadow-cyber transition-all duration-300">
              <CardHeader>
                <AlertTriangle className="w-12 h-12 text-destructive mb-4" />
                <CardTitle className="text-destructive">Blind Signing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Users sign transactions without knowing what they're actually approving. 
                  It's like signing a contract in a foreign language while blindfolded.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-destructive/30 hover:shadow-cyber transition-all duration-300">
              <CardHeader>
                <Code2 className="w-12 h-12 text-destructive mb-4" />
                <CardTitle className="text-destructive">Hex Hell</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transaction data looks like alien code. Even devs struggle to decode 
                  what "0x40c10f19" actually means in real life.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-destructive/30 hover:shadow-cyber transition-all duration-300">
              <CardHeader>
                <Eye className="w-12 h-12 text-destructive mb-4" />
                <CardTitle className="text-destructive">Privacy Fails</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Current security tools either don't exist or broadcast your transaction 
                  data to the world. Not exactly Web3's privacy promise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Aledgerly: Your Web3 Bodyguard 🛡️
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine two game-changing technologies to make Web3 signing safe, clear, and private.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <Eye className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Clear Signing (ERC-7730)</h3>
                    <p className="text-muted-foreground">
                      No more hex hell! See exactly what you're signing in plain English. 
                      "Stake 100 CORE to validator X" instead of cryptic machine code.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <Lock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Private Risk Analysis (ROFL)</h3>
                    <p className="text-muted-foreground">
                      Our cybersecurity agent runs inside Oasis's Trusted Execution Environment. 
                      It spots scams and phishing without exposing your data.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <Zap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Real-Time Protection</h3>
                    <p className="text-muted-foreground">
                      Get instant warnings about infinite approvals, delegate call risks, 
                      and sus contracts before you sign anything sketchy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-card border-primary/30 p-8">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Live Transaction Preview</CardTitle>
                <CardDescription>See how Aledgerly transforms scary hex into clear actions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Before (Traditional Wallet):</p>
                  <code className="text-xs text-destructive font-mono break-all">
                    0x40c10f19000000000000000000000000742d35Cc6032C...
                  </code>
                </div>
                
                <ArrowRight className="w-6 h-6 text-primary mx-auto" />
                
                <div className="bg-secondary/20 p-4 rounded-lg border border-secondary/30">
                  <p className="text-sm text-muted-foreground mb-2">After (Aledgerly):</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-secondary">🥩 Stake CORE Tokens</p>
                    <p className="text-sm">Amount: 100 CORE</p>
                    <p className="text-sm">Validator: CoreDAO-Validator-1</p>
                    <Badge className="bg-secondary/20 text-secondary">✅ Low Risk</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built Different 🔥
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another wallet UI. We're pioneering the future of Web3 security 
              with cutting-edge tech that actually works.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-card border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Eye className="w-8 h-8 text-primary" />
                  Ledger Clear Signing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span>ERC-7730 metadata for CoreStake contract</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span>Core DAO (Chain ID 1116) support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span>Mint, redeem, withdraw functions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span>Manually validated JSON schemas</span>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg mt-4">
                  <p className="text-sm text-muted-foreground mb-2">Contract Address:</p>
                  <code className="text-xs font-mono">0xf5fA1728bABc3f8D2a617397faC2696c958C3409</code>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-accent/30">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Lock className="w-8 h-8 text-accent" />
                  Oasis ROFL Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span>Runs inside Trusted Execution Environment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span>Private transaction risk analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span>Infinite approval detection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span>Phishing pattern recognition</span>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg mt-4">
                  <p className="text-sm text-muted-foreground mb-2">Security Features:</p>
                  <ul className="text-xs space-y-1">
                    <li>• Delegate call risk scanning</li>
                    <li>• Fake token detection</li>
                    <li>• Replay attack prevention</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Ready to Stop Getting Rekt? 🛡️
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the security revolution. Make every Web3 transaction clear, safe, and private.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="security" size="lg" className="text-xl px-12 py-8">
                Secure Your Web3 Experience 🚀
              </Button>
              <Link to="/glossary">
                <Button variant="cyber" size="lg" className="text-xl px-12 py-8">
                  Learn the Lingo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Private Analysis</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">0</div>
                <div className="text-muted-foreground">Blind Signatures</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">∞</div>
                <div className="text-muted-foreground">Peace of Mind</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-bold">Aledgerly</span>
              <Badge variant="secondary" className="ml-2">ETHGlobal Cannes 2025</Badge>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link to="/glossary" className="hover:text-foreground transition-colors">
                Glossary
              </Link>
              <span>Built with 🛡️ for Web3 Security</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;