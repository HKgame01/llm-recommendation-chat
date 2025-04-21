"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Copy, Download, ThumbsUp, ThumbsDown, Bot, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
	role: "agent" | "user";
	content: string;
	timestamp: string;
}

interface ChatHistory {
	id: string;
	title: string;
	lastMessage: string;
	timestamp: string;
	messages: Message[];
}

// Sample chat histories
const chatHistories: ChatHistory[] = [
	{
		id: "1",
		title: "GPT-4 vs Claude 3",
		lastMessage: "Based on your requirements, I recommend...",
		timestamp: "Yesterday, 3:45 PM",
		messages: [
			{
				role: "user",
				content:
					"I need to compare GPT-4 and Claude 3 for my enterprise application. Which one would be better for handling complex reasoning tasks?",
				timestamp: "3:42 PM",
			},
			{
				role: "agent",
				content:
					"Based on your requirements for complex reasoning tasks in an enterprise setting, here's my comparison:\n\n**GPT-4**:\n- Excellent at complex reasoning and problem-solving\n- Strong at following nuanced instructions\n- Better integration with Microsoft products\n- Higher cost structure\n\n**Claude 3**:\n- Comparable reasoning capabilities\n- Excellent at understanding context and nuance\n- More transparent in its reasoning process\n- Generally lower cost than GPT-4\n\nFor complex reasoning specifically, both models perform at a high level, but GPT-4 might have a slight edge in certain domains. However, Claude 3 offers better value and is more transparent about its reasoning process.\n\nI recommend starting with Claude 3 Opus and only switching to GPT-4 if you find specific reasoning tasks where it underperforms.",
				timestamp: "3:45 PM",
			},
		],
	},
	{
		id: "2",
		title: "Budget LLMs for Startups",
		lastMessage: "For your budget constraints, I suggest...",
		timestamp: "Aug 15, 2024",
		messages: [
			{
				role: "user",
				content:
					"We're a small startup with limited budget. What are the best LLMs we can use that won't break the bank?",
				timestamp: "2:30 PM",
			},
			{
				role: "agent",
				content:
					"For startups with budget constraints, here are my recommendations:\n\n1. **Mistral Large** - Excellent performance-to-cost ratio, suitable for most general tasks\n\n2. **Claude Instant** - Fast, affordable, and good for customer service applications\n\n3. **Llama 3 (8B or 70B)** - Can be self-hosted to reduce costs, good for various applications\n\n4. **GPT-3.5 Turbo** - Still powerful enough for many applications at a fraction of GPT-4's cost\n\n5. **Cohere Command** - Good for text generation and classification tasks\n\nFor most startups, I'd recommend starting with GPT-3.5 Turbo or Mistral Small for general use cases, and only upgrading to more expensive models for specific features you need.",
				timestamp: "2:35 PM",
			},
		],
	},
];

export default function ChatInterface() {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState<Message[]>([]);
	const [activeChat, setActiveChat] = useState<string | null>(null);

	const handleSend = () => {
		if (!input.trim()) return;

		const lowerText = input.toLowerCase();
		let msg = "";
		if (
			lowerText.includes("cost") ||
			lowerText.includes("comparison") ||
			lowerText.includes("pricing")
		) {
			msg =
				"Recommended LLM: GPT-4 (for its analytical and structured output)";
		} else if (
			lowerText.includes("performance") ||
			lowerText.includes("accuracy") ||
			lowerText.includes("evaluation")
		) {
			msg =
				"Recommended LLM: Claude 3 Opus (strong evaluation and reasoning)";
		} else if (
			lowerText.includes("reasoning") ||
			lowerText.includes("inference") ||
			lowerText.includes("logic")
		) {
			msg =
				"Recommended LLM: Gemini 1.5 Pro (great for logical reasoning)";
		} else if (
			lowerText.includes("human") ||
			lowerText.includes("natural language") ||
			lowerText.includes("eval")
		) {
			msg =
				"Recommended LLM: LLaMA 3 (fine-tuned for human-centric NLP tasks)";
		} else {
			msg = "No suitable LLM found. Please provide more details.";
		}

		const newMessage: Message = {
			role: "user",
			content: input,
			timestamp: new Date().toLocaleTimeString([], {
				hour: "numeric",
				minute: "2-digit",
			}),
		};

		setMessages([...messages, newMessage]);
		setInput("");

		// Simulate agent response
		setTimeout(() => {
			const agentResponse: Message = {
				role: "agent",
				content: msg,
				timestamp: new Date().toLocaleTimeString([], {
					hour: "numeric",
					minute: "2-digit",
				}),
			};
			setMessages((prev) => [...prev, agentResponse]);
		}, 1000);
	};

	const loadChat = (chatId: string) => {
		const chat = chatHistories.find((c) => c.id === chatId);
		if (chat) {
			setMessages(chat.messages);
			setActiveChat(chatId);
		}
	};

	return (
		<div className="flex-1 flex flex-col">
			<ScrollArea className="flex-1 p-4">
				{messages.length === 0 ? (
					<div className="h-full flex flex-col items-center justify-center text-center p-4">
						<div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
							<Bot className="h-8 w-8 text-primary" />
						</div>
						<h2 className="text-2xl font-bold mb-2">
							LLM Recommendation Assistant
						</h2>
						<p className="text-muted-foreground max-w-md mb-8">
							Describe your project requirements and I'll
							recommend the best language models for your specific
							needs.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
							<Button
								variant="outline"
								className="p-4 h-auto flex flex-col items-start text-left group"
								onClick={() => loadChat("1")}
							>
								<span className="font-medium mb-1 truncate w-full">
									Compare top LLMs
								</span>
								<span className="text-sm text-muted-foreground line-clamp-2">
									Get a detailed comparison of leading models
									like GPT-4, Claude 3, and more
								</span>
							</Button>
							<Button
								variant="outline"
								className="p-4 h-auto flex flex-col items-start text-left group"
								onClick={() => loadChat("2")}
							>
								<span className="font-medium mb-1 truncate w-full">
									Budget-friendly options
								</span>
								<span className="text-sm text-muted-foreground line-clamp-2">
									Discover cost-effective LLMs for startups
									and small projects
								</span>
							</Button>
							<Button
								variant="outline"
								className="p-4 h-auto flex flex-col items-start text-left group"
							>
								<span className="font-medium mb-1 truncate w-full">
									Specialized use cases
								</span>
								<span className="text-sm text-muted-foreground line-clamp-2">
									Find models optimized for specific tasks
									like coding, content generation, or RAG
								</span>
							</Button>
							<Button
								variant="outline"
								className="p-4 h-auto flex flex-col items-start text-left group"
							>
								<span className="font-medium mb-1 truncate w-full">
									Enterprise solutions
								</span>
								<span className="text-sm text-muted-foreground line-clamp-2">
									Get recommendations for secure, scalable
									LLMs for enterprise use
								</span>
							</Button>
						</div>
					</div>
				) : (
					<div className="space-y-4">
						{messages.map((message, index) => (
							<div
								key={index}
								className={cn(
									"flex gap-2 max-w-[90%]",
									message.role === "user"
										? "ml-auto flex-row-reverse"
										: ""
								)}
							>
								{message.role === "agent" && (
									<div className="h-8 w-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
										<Bot className="h-4 w-4 text-primary-foreground" />
									</div>
								)}
								<div
									className={cn(
										"space-y-2",
										message.role === "user" && "items-end"
									)}
								>
									<div
										className={cn(
											"flex items-center gap-2",
											message.role === "user" &&
												"flex-row-reverse"
										)}
									>
										<span className="text-sm font-medium">
											{message.role === "agent"
												? "LLM Advisor"
												: "You"}
										</span>
										<span className="text-sm text-muted-foreground">
											{message.timestamp}
										</span>
									</div>
									<div
										className={cn(
											"p-3 rounded-lg",
											message.role === "user"
												? "bg-primary text-primary-foreground"
												: "bg-muted/50"
										)}
									>
										<p className="text-sm whitespace-pre-wrap">
											{message.content}
										</p>
									</div>
									{message.role === "agent" && (
										<div className="flex items-center gap-2">
											<Button
												variant="ghost"
												size="icon"
												className="h-8 w-8"
											>
												<Copy className="h-4 w-4" />
											</Button>
											<Button
												variant="ghost"
												size="icon"
												className="h-8 w-8"
											>
												<Download className="h-4 w-4" />
											</Button>
											<Button
												variant="ghost"
												size="icon"
												className="h-8 w-8"
											>
												<ThumbsUp className="h-4 w-4" />
											</Button>
											<Button
												variant="ghost"
												size="icon"
												className="h-8 w-8"
											>
												<ThumbsDown className="h-4 w-4" />
											</Button>
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				)}
			</ScrollArea>
			<div className="sticky bottom-0 bg-background border-t p-4">
				<div className="flex gap-2 max-w-3xl mx-auto relative">
					<Textarea
						placeholder="Describe your LLM requirements..."
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className="min-h-[44px] max-h-32 resize-none w-full pr-12"
						onKeyDown={(e) => {
							if (e.key === "Enter" && !e.shiftKey) {
								e.preventDefault();
								handleSend();
							}
						}}
					/>
					<Button
						className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
						onClick={handleSend}
					>
						<Send className="h-4 w-4" />
					</Button>
				</div>
			</div>
		</div>
	);
}
